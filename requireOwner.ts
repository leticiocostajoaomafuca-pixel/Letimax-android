import { NextFunction, Request, Response } from "express";
import { env } from "../config/env";
import { verifyFirebaseIdToken } from "../services/firebase";

declare global {
  namespace Express {
    interface Request {
      owner?: { uid: string; email?: string };
    }
  }
}

export async function requireOwner(req: Request, res: Response, next: NextFunction) {
  const authorization = req.header("authorization");
  const match = authorization?.match(/^Bearer\s+([A-Za-z0-9._~-]+)$/i);

  if (!match) {
    res.status(401).json({ error: "Autenticação necessária." });
    return;
  }

  if (!env.OWNER_FIREBASE_UID) {
    res.status(503).json({ error: "A identidade do proprietário ainda não foi configurada." });
    return;
  }

  try {
    const token = match[1];
    if (!token) {
      res.status(401).json({ error: "Autenticação necessária." });
      return;
    }
    const decoded = await verifyFirebaseIdToken(token);

    if (decoded.uid !== env.OWNER_FIREBASE_UID) {
      res.status(403).json({ error: "Acesso reservado ao proprietário." });
      return;
    }

    req.owner = {
      uid: decoded.uid,
      ...(typeof decoded.email === "string" ? { email: decoded.email } : {}),
    };
    next();
  } catch {
    res.status(401).json({ error: "Credencial inválida ou expirada." });
  }
}
