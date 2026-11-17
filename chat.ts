import { Router } from "express";
import { z } from "zod";
import { env } from "../config/env";
import { requireOwner } from "../middleware/requireOwner";

export const chatRouter = Router();

const messageSchema = z.object({
  mensagem: z.string().trim().min(1).max(12000),
});

chatRouter.post("/", requireOwner, async (req, res) => {
  const parsed = messageSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Escreva uma mensagem válida (máximo 12.000 caracteres)." });
    return;
  }

  if (!env.OPENAI_API_KEY) {
    res.status(503).json({
      error: "O serviço de IA ainda não está configurado. Adicione OPENAI_API_KEY nas variáveis privadas do servidor.",
    });
    return;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: env.OPENAI_MODEL,
        messages: [
          {
            role: "system",
            content: "És a LétimaX, assistente digital do proprietário. Responde em português claro e europeu. Sê rigorosa e não afirmes que executaste acções externas sem confirmação. Nunca executes pagamentos, levantamentos, compras ou publicações; prepara propostas e pede aprovação explícita do proprietário.",
          },
          { role: "user", content: parsed.data.mensagem },
        ],
        temperature: 0.4,
      }),
      signal: AbortSignal.timeout(45000),
    });

    if (!response.ok) {
      // Provider response bodies are intentionally not forwarded to the app.
      console.error("O fornecedor de IA recusou o pedido. Código HTTP:", response.status);
      res.status(response.status === 429 ? 503 : 502).json({
        error: response.status === 429
          ? "O serviço de IA atingiu o limite de utilização. Tente mais tarde."
          : "Não foi possível obter uma resposta da IA. Verifique a configuração do fornecedor.",
      });
      return;
    }

    const data = await response.json() as {
      choices?: Array<{ message?: { content?: string | null } }>;
    };
    const resposta = data.choices?.[0]?.message?.content?.trim();

    if (!resposta) {
      res.status(502).json({ error: "O fornecedor de IA devolveu uma resposta vazia." });
      return;
    }

    res.status(200).json({ resposta });
  } catch {
    res.status(504).json({ error: "A IA demorou demasiado tempo a responder. Tente novamente." });
  }
});
