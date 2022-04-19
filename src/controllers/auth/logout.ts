import { Request, Response } from 'express';

export const logout = async (req: Request, res: Response) => {
  res.json({ msg: 'logout' });
};
