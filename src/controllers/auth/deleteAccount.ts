import { Request, Response } from 'express';
export const deleteAccount = async (req: Request, res: Response) => {
  res.json({ msg: 'delete account' });
};
