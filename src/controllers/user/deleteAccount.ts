import {Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {BadRequestError, NotFoundError} from '../../errors';
import {User} from '../../models';
import {sendDeleteAccountEmail} from '../../utils';

export const deleteAccount = async (req: any, res: Response) => {
  const {_id} = req.user;
  const {email, password} = req.body;

  if (!(email && password)) throw BadRequestError('Insufficient information');

  const user = await User.findOne({email, _id});

  if (!user) throw NotFoundError('User not found');

  if (!(await user.comparePassword(password))) {
    throw BadRequestError('Wrong password');
  }

  user.isDeletionVerified = true;
  user.save();

  await sendDeleteAccountEmail(user);

  res
      .status(StatusCodes.OK)
      .json({msg: `Verification code sent to ${user.email}`});
};
