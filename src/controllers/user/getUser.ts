import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {User} from '../../models';

export const getUser = async (req: Request | any, res: Response | any) => {
  const user = await User.findOne(
      {_id: req.user._id},
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
