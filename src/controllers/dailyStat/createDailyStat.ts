import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {DailyStat} from '../../models';

export const createDailyStat = async (req: Request, res: Response) => {
  const {date, weight} = req.body;
  const dateObject = new Date(date);

  // eslint-disable-next-line max-len
  const dateString = `${dateObject.getUTCFullYear()}-${dateObject.getUTCMonth()+1}-${dateObject.getUTCDate()}`;
  // ^ The one is added because the month is 0 indexed

  const userID = res.locals.user._id;

  const dailyStat = await DailyStat.create({
    date: dateString,
    weight,
    userID,
  });
  res.status(StatusCodes.CREATED)
      .json({
        _id: dailyStat._id,
        date: dailyStat.date,
        userID: dailyStat.userID,
      });
};
