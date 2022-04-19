import { Request, Response } from 'express';
export const verifyPhone = async (req: Request, res: Response) => {
  res.json({ msg: 'verify phone' });
};
