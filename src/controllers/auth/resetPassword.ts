import { Request, Response } from 'express';
export const resetPassword = async (req: Request, res: Response) => {
  res.json({ msg: 'reset password' });
};
