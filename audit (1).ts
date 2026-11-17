import { FieldValue } from "firebase-admin/firestore";
import { getDatabase } from "./firestore";

export type AuditEvent =
  | "approval.created"
  | "approval.approved"
  | "approval.rejected"
  | "approval.read"
  | "audit.read";

export async function writeAudit(event: AuditEvent, actorUid: string, targetId?: string) {
  const db = getDatabase();
  await db.collection("audit_logs").add({
    event,
    actorUid,
    ...(targetId ? { targetId } : {}),
    createdAt: FieldValue.serverTimestamp(),
  });
}
