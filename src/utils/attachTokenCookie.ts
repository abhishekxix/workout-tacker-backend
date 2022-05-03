import {createJWT} from './createJWT';
import {Response} from 'express';

export const attachTokenCookie = (res: Response, tokenUser: any) => {
  const token = createJWT(tokenUser, process.env.LOGIN_LIFETIME);
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
};
