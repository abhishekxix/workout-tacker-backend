import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {NotFoundError, UnauthorizedError} from '../../errors';
import {DailyStat} from '../../models';
import {getDateString, getResLocal} from '../../utils';

export const updateDailyStat = async (req: Request, res: Response) => {
  const {_id, date, weight} = req.body;
  const userID = getResLocal(res, 'user')._id;

  const dailyStat = await DailyStat.findOne({_id, userID}, {__v: 0});

  if (!dailyStat) throw new NotFoundError(`No dailyStat found with id: ${_id}`);

  if (dailyStat.userID.toString() !== userID) {
    throw new UnauthorizedError(
        'this dailyStat does not belong to this user.',
    );
  }

  const dateObject = new Date(date);

  // eslint-disable-next-line max-len
  const dateString = getDateString(dateObject);

  dailyStat.date = dateString;
  dailyStat.weight = weight;
  await dailyStat.save();

  res.status(StatusCodes.OK).json(dailyStat);
};
