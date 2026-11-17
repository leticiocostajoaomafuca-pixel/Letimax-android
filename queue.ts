import { randomUUID } from "node:crypto";
import { Router } from "express";
import { z } from "zod";
import { requireOwner } from "../middleware/requireOwner";
import { getRedis } from "../services/redis";

export const queueRouter = Router();
queueRouter.use(requireOwner);

const enqueueSchema = z.object({
  type: z.enum(["generate_report", "sync_workspace", "refresh_analytics"]),
  description: z.string().trim().min(5).max(500),
}).strict();

const queueKey = (uid: string) => "letimax:jobs:pending:" + uid;
const globalQueueKey = "letimax:jobs:pending:global";
const jobPrefix = (uid: string, id: string) => "letimax:jobs:item:" + uid + ":" + id;

queueRouter.post("/", async (req, res) => {
  const parsed = enqueueSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Tarefa inválida.", details: parsed.error.flatten() });
    return;
  }

  try {
    const redis = getRedis();
    const id = randomUUID();
    const job = {
      id,
      type: parsed.data.type,
      description: parsed.data.description,
      ownerUid: req.owner!.uid,
      status: "queued" as const,
      createdAt: new Date().toISOString(),
    };

    await redis.set(jobPrefix(req.owner!.uid, id), job, { ex: 60 * 60 * 24 * 7 });
    await redis.lpush(queueKey(req.owner!.uid), id);
    await redis.lpush(globalQueueKey, JSON.stringify({ ownerUid: req.owner!.uid, id }));
    res.status(202).json({
      job: { id, type: job.type, status: job.status, createdAt: job.createdAt },
      message: "Tarefa colocada na fila. Ainda não foi executada.",
    });
  } catch {
    res.status(503).json({ error: "Fila indisponível. Verifique a configuração do Upstash Redis." });
  }
});

queueRouter.get("/", async (req, res) => {
  const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 50);
  try {
    const redis = getRedis();
    const ids = await redis.lrange<string>(queueKey(req.owner!.uid), 0, limit - 1);
    const jobs = await Promise.all(ids.map(id => redis.get<Record<string, unknown>>(jobPrefix(req.owner!.uid, id))));
    res.status(200).json({
      pending: jobs.filter(job => job && job.status === "queued").map(job => ({
        id: job!.id,
        type: job!.type,
        status: job!.status,
        createdAt: job!.createdAt,
      })),
    });
  } catch {
    res.status(503).json({ error: "Não foi possível consultar a fila." });
  }
});

queueRouter.get("/:id", async (req, res) => {
  if (!/^[0-9a-f-]{36}$/i.test(req.params.id)) {
    res.status(400).json({ error: "Identificador inválido." });
    return;
  }
  try {
    const job = await getRedis().get<Record<string, unknown>>(jobPrefix(req.owner!.uid, req.params.id));
    if (!job) {
      res.status(404).json({ error: "Tarefa não encontrada." });
      return;
    }
    res.status(200).json({
      id: job.id,
      type: job.type,
      status: job.status,
      createdAt: job.createdAt,
      attempts: job.attempts ?? 0,
      result: job.result ?? null,
      error: job.error ?? null,
      completedAt: job.completedAt ?? null,
    });
  } catch {
    res.status(503).json({ error: "Não foi possível consultar o estado da tarefa." });
  }
});
