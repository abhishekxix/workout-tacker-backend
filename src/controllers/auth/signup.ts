import { Request, Response } from 'express';
import { User } from '../../models';
import { sendVerificationMail } from '../../utils';
import { StatusCodes } from 'http-status-codes';

export const signup = async (req: Request, res: Response) => {
  const { name, email, password, phoneNumber } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    phoneNumber,
  });

  await sendVerificationMail(user);

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'please verify your email address.' });
};
