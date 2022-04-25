import jwt from 'jsonwebtoken';

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.JWT_SECRET as string);
