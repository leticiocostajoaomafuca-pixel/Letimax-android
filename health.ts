import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.status(200).json({
    ok: true,
    service: "letimax-server",
    status: "online",
    timestamp: new Date().toISOString(),
    stage: "foundation",
  });
});
