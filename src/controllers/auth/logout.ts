import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';

export const logout = async (req: Request, res: Response) => {
  res.clearCookie('token');

  res.status(StatusCodes.OK).json({msg: 'logout successful'});
};
