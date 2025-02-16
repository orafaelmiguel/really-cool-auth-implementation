import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../infra/errors/unauthorized";
import { verifyToken } from "../utils/jwt-utils";

export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({ error: new UnauthorizedError() })
  }

  try {
    const decoded = verifyToken(token)
    req.user = decoded
    next()
  } catch (error) {
    res.status(400).json({ error: 'Invalid Token' })
  }
}