import { Request, Response } from 'express';
import { User } from '../../models';
import {
  formatPhoneNumber,
  sendVerificationMail,
  sendVerificationSMS,
} from '../../utils';
import { StatusCodes } from 'http-status-codes';

export const signup = async (req: Request, res: Response) => {
  const { name, email, password, phoneNumber, region } = req.body;

  const userPhone = formatPhoneNumber(phoneNumber, region);
  const user = await User.create({
    name,
    email,
    password,
    phoneNumber: userPhone,
    region,
  });

  await sendVerificationMail(user);
  let msg = 'Please verify your email address';

  if (phoneNumber) {
    await sendVerificationSMS(user);
    msg += ' and phone number';
  }

  res.status(StatusCodes.CREATED).json({ msg });
};
