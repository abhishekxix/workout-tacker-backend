import { Request, Response } from 'express';
import { UserSchema as User } from '@models';
export const signup = async (req: Request, res: Response) => {
  const { name, email, password, phoneNumber, isVerified } = req.body;
  const user = await User;
};
