import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {BadRequestError, NotFoundError} from '../../errors';
import {User} from '../../models';
import {attachTokenCookie, verifyToken, createTokenUser} from '../../utils';

export const verifyEmail = async (req: Request, res: Response) => {
  const {verificationToken} = req.params;
  let payload;

  try {
    payload = verifyToken(verificationToken);
  } catch (err) {
    throw BadRequestError('Invalid verification token');
  }

  const user: any = await User.findOne({
    email: payload.email,
  });

  if (!user) throw NotFoundError(`No user found with email ${payload.email}`);

  if (user && user.isEmailVerified) {
    throw BadRequestError('User is already verified.');
  }
  user.isEmailVerified = true;
  await user.save();
  const tokenUser = createTokenUser(user);

  attachTokenCookie(res, tokenUser);
  res.status(StatusCodes.OK).json({msg: 'verified.'});
};
