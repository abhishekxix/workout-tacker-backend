import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UnauthorizedError } from '../../errors';
import { User } from '../../models';
import { verifyToken } from '../../utils';

export const verifyDeleteAccount = async (req: Request, res: Response) => {
  const { verificationToken } = req.body;

  let payload = undefined;

  try {
    payload = verifyToken(verificationToken);
  } catch (err) {
    throw UnauthorizedError('Invalid verification token');
  }

  const user = await User.findOne({ _id: payload._id });

  if (!user.isDeletionVerified)
    throw UnauthorizedError('Deletion is not authorized');

  await User.deleteOne({ _id: user._id });

  res.status(StatusCodes.OK).json({ msg: 'Account deleted successfully.' });
};
