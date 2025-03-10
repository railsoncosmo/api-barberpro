import { Request, Response, NextFunction } from 'express';
import { hash } from "bcryptjs";

export async function hashPassword(req: Request, res: Response, next: NextFunction){
  if(!req.body.password){
    throw new Error("Password is required");
  }

  try {
    req.body.password = await hash(req.body.password, 10);
    next();
  } catch (error) {
    return res.status(500).json({ error: "Error hashing password" });
  }
}