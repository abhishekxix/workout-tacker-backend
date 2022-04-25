import { Request, Response } from 'express';
import { User } from '@models';

export const signup = async (req: Request, res: Response) => {
  const { name, email, password, phoneNumber } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    phoneNumber,
  });
};
