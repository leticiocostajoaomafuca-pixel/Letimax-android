import { Timestamp } from "firebase-admin/firestore";
import { Router } from "express";
import { requireOwner } from "../middleware/requireOwner";
import { getDatabase } from "../services/firestore";

export const auditRouter = Router();
auditRouter.use(requireOwner);

auditRouter.get("/", async (req, res) => {
  const limit = Math.min(Math.max(Number(req.query.limit) || 30, 1), 100);

  try {
    const snapshot = await getDatabase()
      .collection("audit_logs")
      .where("actorUid", "==", req.owner!.uid)
      .orderBy("createdAt", "desc")
      .limit(limit)
      .get();

    const items = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        event: data.event,
        actorUid: data.actorUid,
        targetId: data.targetId ?? null,
        createdAt: data.createdAt instanceof Timestamp
          ? data.createdAt.toDate().toISOString()
          : null,
      };
    });

    res.status(200).json({ items });
  } catch {
    res.status(503).json({ error: "Não foi possível consultar o registo de auditoria." });
  }
});
