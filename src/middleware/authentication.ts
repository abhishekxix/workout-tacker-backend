import {Request, Response, NextFunction} from 'express';
import {UnauthorizedError} from '../errors';
import {verifyToken} from '../utils';

export const authenticateUser = (
    req: Request | any,
    res: Response | any,
    next: NextFunction,
) => {
  const {token} = req.signedCookies;

  if (!token) {
    throw new UnauthorizedError(
        'You need to be logged in to perform this action.',
    );
  }
  let tokenUser = undefined;
  try {
    tokenUser = verifyToken(token);
  } catch (err) {
    throw new UnauthorizedError('Invalid token.');
  }
  delete tokenUser.iat;
  delete tokenUser.exp;
  req.user = tokenUser;
  next();
};
