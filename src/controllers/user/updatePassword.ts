import { Request, Response } from 'express';

export const updatePassword = async (req: Request, res: Response) => {
  res.json({ msg: 'updatePassword' });
};
