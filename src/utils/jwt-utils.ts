import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET não está definido no arquivo .env');
}

export function generateToken(userId: string): string {
  const payload = { id: userId };
  return jwt.sign(payload, JWT_SECRET);
}

export function verifyToken(token: string): jwt.JwtPayload | string {
  return jwt.verify(token, JWT_SECRET)
}