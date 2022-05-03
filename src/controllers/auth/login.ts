import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../../errors';
import {User} from '../../models';
import {
  attachTokenCookie,
  createTokenUser,
  sendVerificationMail,
} from '../../utils';

export const login = async (req: Request, res: Response) => {
  const {email, password} = req.body;

  if (!(email && password)) {
    throw BadRequestError('Provide both email and password');
  }
  const user = await User.findOne({email});

  if (!user) throw NotFoundError(`No user found with email ${email}`);

  if (!user.isEmailVerified) {
    sendVerificationMail(user);
    throw UnauthorizedError('Please verify your email id before you log in.');
  }

  if (!(await user.comparePassword(password))) {
    res.clearCookie('token');
    throw UnauthorizedError('Wrong password');
  }
  const tokenUser = createTokenUser(user);
  attachTokenCookie(res, tokenUser);
  res.status(StatusCodes.OK).json({user: tokenUser});
};
