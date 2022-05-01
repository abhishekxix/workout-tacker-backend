import {Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {BadRequestError} from '../../errors';
import {User} from '../../models';
import {sendVerificationMail} from '../../utils';

export const updateEmail = async (req: any, res: Response) => {
  const {email} = req.body;
  const {_id} = req.user;

  if (!email) {
    throw BadRequestError('Please provide a value for email');
  }

  const user = await User.findById(_id);
  user.email = email;
  user.isEmailVerified = false;
  await user.save();

  await sendVerificationMail(user);

  res
    .status(StatusCodes.ACCEPTED)
    .json({msg: 'Please verify your email address.'});
};
