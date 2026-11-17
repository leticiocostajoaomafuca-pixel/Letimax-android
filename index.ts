import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { env } from "./config/env";
import { healthRouter } from "./routes/health";
import { ownerRouter } from "./routes/owner";
import { approvalsRouter } from "./routes/approvals";
import { auditRouter } from "./routes/audit";
import { workspaceRouter } from "./routes/workspace";
import { storageRouter } from "./routes/storage";
import { queueRouter } from "./routes/queue";
import { redisRouter } from "./routes/redis";
import { chatRouter } from "./routes/chat";

const app = express();

if (env.TRUST_PROXY === "true") {
  app.set("trust proxy", 1);
}

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({
  origin: env.APP_ORIGIN,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));
app.use(express.json({ limit: "256kb" }));
app.use(rateLimit({
  windowMs: 60_000,
  limit: 60,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Limite de pedidos atingido. Tente novamente mais tarde." },
}));

app.get("/", (_req, res) => {
  res.status(200).json({ service: "LétimaX Server", docs: "Documentação em desenvolvimento" });
});

app.use("/api/health", healthRouter);
app.use("/api/chat", chatRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/approvals", approvalsRouter);
app.use("/api/audit", auditRouter);
app.use("/api/workspace", workspaceRouter);
app.use("/api/storage", storageRouter);
app.use("/api/queue", queueRouter);
app.use("/api/redis", redisRouter);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  // Never expose stack traces, environment variables or provider credentials to clients.
  console.error("Erro interno no servidor.");
  res.status(500).json({ error: "Erro interno. O evento foi registado sem expor dados sensíveis." });
});

export { app };

if (require.main === module) {
  app.listen(env.PORT, "0.0.0.0", () => {
    console.log(`LétimaX Server iniciado na porta ${env.PORT}.`);
  });
}
