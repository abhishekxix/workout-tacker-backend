import { Request, Response } from 'express';

export const updateEmail = async (req: Request, res: Response) => {
  res.json({ msg: 'updateEmail' });
};
