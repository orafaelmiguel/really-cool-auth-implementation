import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload | string; // Adiciona a propriedade `user` ao objeto `Request`
    }
  }
}