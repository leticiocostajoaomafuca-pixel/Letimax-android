import { Router } from "express";
import { requireOwner } from "../middleware/requireOwner";

export const ownerRouter = Router();

ownerRouter.get("/session", requireOwner, (req, res) => {
  res.status(200).json({
    authenticated: true,
    role: "owner",
    uid: req.owner?.uid,
  });
});
