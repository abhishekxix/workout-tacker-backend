import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {User} from '../../models';
import {getResLocal} from '../../utils';

export const getUser = async (req: Request, res: Response) => {
  const user = await User.findOne(
      {_id: getResLocal(res, 'user')._id},
      {
        password: 0,
        isEmailVerified: 0,
        isPhoneVerified: 0,
        __v: 0,
        isDeletionVerified: 0,
      },
  );
  res.status(StatusCodes.OK).json({user});
};
