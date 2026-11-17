import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { Router } from "express";
import { z } from "zod";
import { requireOwner } from "../middleware/requireOwner";
import { getDatabase } from "../services/firestore";

export const approvalsRouter = Router();
approvalsRouter.use(requireOwner);

const requestSchema = z.object({
  actionType: z.enum(["publish_content", "publish_product", "create_ad", "spend_money", "purchase", "withdraw_money", "change_niche", "share_external_data", "other"]),
  title: z.string().trim().min(3).max(100),
  summary: z.string().trim().min(5).max(1000),
}).strict();

const decisionSchema = z.object({
  decision: z.enum(["approved", "rejected"]),
  reason: z.string().trim().max(500).optional(),
}).strict();

function iso(value: unknown): string | null {
  return value instanceof Timestamp ? value.toDate().toISOString() : null;
}

approvalsRouter.post("/", async (req, res) => {
  const parsed = requestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Pedido inválido.", details: parsed.error.flatten() });
    return;
  }

  try {
    const db = getDatabase();
    const ref = db.collection("approval_requests").doc();
    const batch = db.batch();
    batch.create(ref, {
      ...parsed.data,
      status: "pending",
      requestedBy: req.owner!.uid,
      createdAt: FieldValue.serverTimestamp(),
      decidedAt: null,
      decidedBy: null,
      decisionReason: null,
    });
    const auditRef = db.collection("audit_logs").doc();
    batch.create(auditRef, {
      event: "approval.created",
      actorUid: req.owner!.uid,
      targetId: ref.id,
      createdAt: FieldValue.serverTimestamp(),
    });
    await batch.commit();
    res.status(201).json({ id: ref.id, status: "pending", message: "Pedido registado. Nenhuma acção externa foi executada." });
  } catch {
    res.status(503).json({ error: "Não foi possível guardar o pedido. Verifique a configuração do Firebase." });
  }
});

approvalsRouter.get("/", async (req, res) => {
  const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 50);
  const status = req.query.status;
  if (status !== undefined && !["pending", "approved", "rejected"].includes(String(status))) {
    res.status(400).json({ error: "Estado inválido." });
    return;
  }

  try {
    const db = getDatabase();
    const collection = db.collection("approval_requests").where("requestedBy", "==", req.owner!.uid);
    const snapshot = status
      ? await collection.where("status", "==", String(status)).orderBy("createdAt", "desc").limit(limit).get()
      : await collection.orderBy("createdAt", "desc").limit(limit).get();
    const items = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        actionType: data.actionType,
        title: data.title,
        summary: data.summary,
        status: data.status,
        createdAt: iso(data.createdAt),
        decidedAt: iso(data.decidedAt),
        decisionReason: data.decisionReason ?? null,
      };
    });
    res.status(200).json({ items });
  } catch {
    res.status(503).json({ error: "Não foi possível consultar os pedidos de aprovação." });
  }
});

approvalsRouter.post("/:id/decision", async (req, res) => {
  if (!/^[A-Za-z0-9_-]{20}$/.test(req.params.id)) {
    res.status(400).json({ error: "Identificador inválido." });
    return;
  }
  const parsed = decisionSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Decisão inválida.", details: parsed.error.flatten() });
    return;
  }

  try {
    const db = getDatabase();
    const ref = db.collection("approval_requests").doc(req.params.id);
    await db.runTransaction(async transaction => {
      const snapshot = await transaction.get(ref);
      if (!snapshot.exists || snapshot.data()?.requestedBy !== req.owner!.uid) throw new Error("NOT_FOUND");
      if (snapshot.data()?.status !== "pending") throw new Error("ALREADY_DECIDED");

      transaction.update(ref, {
        status: parsed.data.decision,
        decidedBy: req.owner!.uid,
        decidedAt: FieldValue.serverTimestamp(),
        decisionReason: parsed.data.reason ?? null,
      });
      const auditRef = db.collection("audit_logs").doc();
      transaction.create(auditRef, {
        event: parsed.data.decision === "approved" ? "approval.approved" : "approval.rejected",
        actorUid: req.owner!.uid,
        targetId: ref.id,
        createdAt: FieldValue.serverTimestamp(),
      });
    });

    res.status(200).json({
      id: req.params.id,
      status: parsed.data.decision,
      message: "Decisão registada. A aprovação não executa a operação.",
    });
  } catch (error) {
    if (error instanceof Error && error.message === "NOT_FOUND") {
      res.status(404).json({ error: "Pedido não encontrado." });
      return;
    }
    if (error instanceof Error && error.message === "ALREADY_DECIDED") {
      res.status(409).json({ error: "Este pedido já foi decidido." });
      return;
    }
    res.status(503).json({ error: "Não foi possível registar a decisão." });
  }
});
