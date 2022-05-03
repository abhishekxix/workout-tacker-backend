import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../../errors';
import { User } from '../../models';

export const updatePassword = async (req: any, res: Response) => {
  const { oldPassword, newPassword } = req.body;
  const { _id } = req.user;

  if (!(oldPassword && newPassword)) {
    throw BadRequestError('Insufficient information.');
  }

  const user = await User.findById(_id);

  if (!user) throw NotFoundError(`No user found with id: ${_id}`);

  if (!(await user.comparePassword(oldPassword))) {
    res.clearCookie('token');
    throw UnauthorizedError('Wrong password');
  }

  user.password = newPassword;
  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Password changed successfulyy' });
};
