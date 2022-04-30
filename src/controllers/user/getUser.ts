import { Request, Response } from 'express';

export const getUser = async (req: Request, res: Response) => {
  res.json({ msg: 'getUser' });
};
