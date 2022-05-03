import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {BadRequestError, NotFoundError} from '../../errors';
import {User} from '../../models';
import {sendPasswordResetMail} from '../../utils';

export const resetPassword = async (req: Request, res: Response) => {
  const {email} = req.body;

  if (!email) {
    throw new BadRequestError('Please provide email address.');
  }

  const user = await User.findOne({email});

  if (!user) {
    throw new NotFoundError(`No user found with email: ${email}`);
  }

  sendPasswordResetMail(user);

  res.status(StatusCodes.ACCEPTED)
      .json({msg: 'password reset mail sent with token'});
};
