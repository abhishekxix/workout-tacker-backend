import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../errors';
import { verifyToken } from '../utils';

const authenticateUser = (
  req: Request | any,
  res: Response | any,
  next: NextFunction
) => {
  const { token } = res.signedCookies;
  if (!token) {
    throw UnauthorizedError('You need to be logged in to perform this action.');
  }
  let tokenUser = undefined;
  try {
    tokenUser = verifyToken(token);
  } catch (err) {
    throw UnauthorizedError('Invalid token.');
  }
  delete tokenUser.iat;
  delete tokenUser.exp;
  req.user = tokenUser;
  next();
};
