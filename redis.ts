import { Router } from "express";
import { requireOwner } from "../middleware/requireOwner";
import { isRedisConfigured, getRedis } from "../services/redis";

export const redisRouter = Router();
redisRouter.get("/status", requireOwner, async (_req, res) => {
  if (!isRedisConfigured()) {
    res.status(503).json({ configured: false, reachable: false, provider: "upstash-redis" });
    return;
  }
  try {
    await getRedis().ping();
    res.status(200).json({ configured: true, reachable: true, provider: "upstash-redis" });
  } catch {
    res.status(503).json({ configured: true, reachable: false, provider: "upstash-redis" });
  }
});
