import { Request, Response } from 'express';
export const verifyAndResetPassword = async (req: Request, res: Response) => {
  res.json({ msg: 'verify and reset password' });
};
