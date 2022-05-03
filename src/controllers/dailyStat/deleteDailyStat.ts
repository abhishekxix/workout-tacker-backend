import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {NotFoundError, UnauthorizedError} from '../../errors';
import {DailyStat} from '../../models';

export const deleteDailyStat = async (req: Request, res: Response) => {
  const {_id} = req.body;
  const userID = res.locals.user._id;

  const dailyStat = await DailyStat.findOne({_id, userID});

  if (!dailyStat) throw new NotFoundError(`No dailyStat found with id: ${_id}`);

  if (dailyStat.userID.toString() !== userID) {
    throw new UnauthorizedError(
        'this dailyStat does not belong to this user.',
    );
  }

  await DailyStat.remove({_id});

  res.status(StatusCodes.OK).json({msg: 'success'});
};
