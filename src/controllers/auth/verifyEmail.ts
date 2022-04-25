import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserInterface } from 'Interfaces';

import { BadRequestError } from '../../errors';
import { User } from '../../models';
import { attachTokenCookie, verifyToken } from '../../utils';

export const verifyEmail = async (req: Request, res: Response) => {
  const { verificationToken } = req.params;
  let payload;

  try {
    payload = verifyToken(verificationToken);
  } catch (err) {
    throw BadRequestError('Invalid verification token');
  }

  const user: any = await User.findOne({
    email: payload.email,
  });

  if (user && user.isVerified) {
    throw BadRequestError('User is already verified.');
  }
  user.isVerified = true;
  await user.save();
  const tokenUser = { email: user.email, name: user.name, _id: user._id };

  attachTokenCookie(res, tokenUser);
  res.status(StatusCodes.OK).json({ msg: 'verified.' });
};
