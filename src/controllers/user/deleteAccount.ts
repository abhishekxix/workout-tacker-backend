import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {BadRequestError, NotFoundError} from '../../errors';
import {User} from '../../models';
import {sendDeleteAccountEmail} from '../../utils';

export const deleteAccount = async (req: Request, res: Response) => {
  const {_id} = res.locals.user;
  const {email, password} = req.body;

  if (!(email && password)) {
    throw new BadRequestError('Insufficient information');
  }

  const user = await User.findOne({email, _id});

  if (!user) throw new NotFoundError('User not found');

  if (!(await user.comparePassword(password))) {
    throw new BadRequestError('Wrong password');
  }

  user.isDeletionVerified = true;
  user.save();

  await sendDeleteAccountEmail(user);

  res
      .status(StatusCodes.OK)
      .json({msg: `Verification code sent to ${user.email}`});
};
