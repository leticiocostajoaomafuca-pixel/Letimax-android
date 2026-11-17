import { Router } from "express";
import { requireOwner } from "../middleware/requireOwner";
import { getDatabase } from "../services/firestore";

export const storageRouter = Router();
storageRouter.get("/status", requireOwner, async (_req, res) => {
  try {
    await getDatabase().collection("system").doc("connectivity").get();
    res.status(200).json({ configured: true, provider: "firebase-firestore", reachable: true });
  } catch {
    res.status(503).json({
      configured: false,
      provider: "firebase-firestore",
      reachable: false,
      error: "Firestore indisponível ou credenciais não configuradas.",
    });
  }
});
