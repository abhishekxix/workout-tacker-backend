import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthorizedError } from '../../errors';
import { User } from '../../models';
import { sendVerificationMail, verifyToken } from '../../utils';

export const verifyPasswordReset = async (req: Request, res: Response) => {
  const { verificationToken, newPassword } = req.body;
  let payload = undefined;
  try {
    payload = verifyToken(verificationToken);
  } catch (err) {
    throw UnauthorizedError('Invalid verification token');
  }

  const user = await User.findOne({ email: payload.email });

  if (!user.isEmailVerified) {
    sendVerificationMail(user);
    throw BadRequestError('User is not verified.');
  }

  if (newPassword.length < 6) {
    throw BadRequestError('Password length should be atleast 6 characters.');
  }

  user.password = newPassword;
  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Password changed successfully.' });
};
