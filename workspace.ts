import { DocumentData, FieldValue, Timestamp } from "firebase-admin/firestore";
import { Router } from "express";
import { z } from "zod";
import { requireOwner } from "../middleware/requireOwner";
import { getDatabase } from "../services/firestore";

export const workspaceRouter = Router();
workspaceRouter.use(requireOwner);

const createSchema = z.object({
  type: z.enum(["task", "product", "note", "business"]),
  title: z.string().trim().min(2).max(120),
  description: z.string().trim().max(2000).optional(),
  category: z.string().trim().max(60).optional(),
  status: z.enum(["draft", "active", "completed", "archived"]).default("draft"),
}).strict();

const updateSchema = z.object({
  title: z.string().trim().min(2).max(120).optional(),
  description: z.string().trim().max(2000).optional(),
  category: z.string().trim().max(60).nullable().optional(),
  status: z.enum(["draft", "active", "completed", "archived"]).optional(),
}).strict().refine(value => Object.keys(value).length > 0, "Indique pelo menos um campo.");

function toItem(id: string, data: DocumentData) {
  const date = (value: unknown) => value instanceof Timestamp ? value.toDate().toISOString() : null;
  return {
    id,
    type: data.type,
    title: data.title,
    description: data.description ?? "",
    category: data.category ?? null,
    status: data.status,
    createdAt: date(data.createdAt),
    updatedAt: date(data.updatedAt),
  };
}

function collectionFor(uid: string) {
  return getDatabase().collection("owners").doc(uid).collection("workspace");
}

workspaceRouter.get("/", async (req, res) => {
  const limit = Math.min(Math.max(Number(req.query.limit) || 30, 1), 100);
  const type = req.query.type;
  if (type !== undefined && !["task", "product", "note", "business"].includes(String(type))) {
    res.status(400).json({ error: "Tipo de registo inválido." });
    return;
  }

  try {
    const base = collectionFor(req.owner!.uid);
    const snapshot = type
      ? await base.where("type", "==", String(type)).orderBy("updatedAt", "desc").limit(limit).get()
      : await base.orderBy("updatedAt", "desc").limit(limit).get();
    res.status(200).json({ items: snapshot.docs.map(doc => toItem(doc.id, doc.data())) });
  } catch {
    res.status(503).json({ error: "Não foi possível consultar os dados guardados." });
  }
});

workspaceRouter.post("/", async (req, res) => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Registo inválido.", details: parsed.error.flatten() });
    return;
  }

  try {
    const db = getDatabase();
    const ref = collectionFor(req.owner!.uid).doc();
    const auditRef = db.collection("audit_logs").doc();
    const batch = db.batch();
    batch.create(ref, {
      ...parsed.data,
      ownerUid: req.owner!.uid,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
    batch.create(auditRef, {
      event: "workspace.created",
      actorUid: req.owner!.uid,
      targetId: ref.id,
      createdAt: FieldValue.serverTimestamp(),
    });
    await batch.commit();
    res.status(201).json({ item: { id: ref.id, ...parsed.data } });
  } catch {
    res.status(503).json({ error: "Não foi possível guardar o registo." });
  }
});

workspaceRouter.patch("/:id", async (req, res) => {
  if (!/^[A-Za-z0-9_-]{20}$/.test(req.params.id)) {
    res.status(400).json({ error: "Identificador inválido." });
    return;
  }
  const parsed = updateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Actualização inválida.", details: parsed.error.flatten() });
    return;
  }

  try {
    const db = getDatabase();
    const ref = collectionFor(req.owner!.uid).doc(req.params.id);
    await db.runTransaction(async transaction => {
      const snapshot = await transaction.get(ref);
      if (!snapshot.exists) throw new Error("NOT_FOUND");
      transaction.update(ref, {
        ...parsed.data,
        updatedAt: FieldValue.serverTimestamp(),
      });
      const auditRef = db.collection("audit_logs").doc();
      transaction.create(auditRef, {
        event: "workspace.updated",
        actorUid: req.owner!.uid,
        targetId: ref.id,
        createdAt: FieldValue.serverTimestamp(),
      });
    });
    res.status(200).json({ id: req.params.id, updated: true });
  } catch (error) {
    if (error instanceof Error && error.message === "NOT_FOUND") {
      res.status(404).json({ error: "Registo não encontrado." });
      return;
    }
    res.status(503).json({ error: "Não foi possível actualizar o registo." });
  }
});
