import { Request, Response } from 'express';
export const verifyEmail = async (req: Request, res: Response) => {
  res.json({ msg: 'verify email' });
};
