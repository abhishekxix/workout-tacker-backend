import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {BadRequestError} from '../../errors';
import {User} from '../../models';
import {attachTokenCookie, createTokenUser} from '../../utils';

export const updateUser = async (req: Request, res: Response) => {
  const {name}: { name: string } = req.body;
  if (!name) throw new BadRequestError('Invalid value for name');

  const user = await User.findById(res.locals.user._id);
  user.name = name;

  const tokenUser = createTokenUser(user);
  attachTokenCookie(res, tokenUser);
  await user.save();

  res.status(StatusCodes.OK).json({user: tokenUser});
};
