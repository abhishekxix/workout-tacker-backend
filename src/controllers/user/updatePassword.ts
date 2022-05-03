import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../../errors';
import {User} from '../../models';

export const updatePassword = async (req: Request, res: Response) => {
  const {oldPassword, newPassword} = req.body;
  const {_id} = res.locals.user;

  if (!(oldPassword && newPassword)) {
    throw new BadRequestError('Insufficient information.');
  }

  const user = await User.findById(_id);

  if (!user) throw new NotFoundError(`No user found with id: ${_id}`);

  if (!(await user.comparePassword(oldPassword))) {
    res.clearCookie('token');
    throw new UnauthorizedError('Wrong password');
  }

  user.password = newPassword;
  await user.save();

  res.status(StatusCodes.OK).json({msg: 'Password changed successfulyy'});
};
