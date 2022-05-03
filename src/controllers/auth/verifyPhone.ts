import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {BadRequestError, NotFoundError} from '../../errors';
import {User} from '../../models';
import {attachTokenCookie, createTokenUser, verifyToken} from '../../utils';

export const verifyPhone = async (req: Request, res: Response) => {
  const {verificationToken} = req.params;
  let payload;

  try {
    payload = verifyToken(verificationToken);
  } catch (err) {
    throw new BadRequestError('Invalid verification token');
  }

  const user: any = await User.findOne({
    phoneNumber: payload.phoneNumber,
  });

  if (!user) {
    throw new NotFoundError(
        `No user found with phone number ${payload.phoneNumber}`,
    );
  }

  if (user && user.isPhoneVerified) {
    throw new BadRequestError('User is already verified.');
  }
  user.isPhoneVerified = true;
  await user.save();
  const tokenUser = createTokenUser(user);

  attachTokenCookie(res, tokenUser);
  res.status(StatusCodes.OK).json({msg: 'verified.'});
};
