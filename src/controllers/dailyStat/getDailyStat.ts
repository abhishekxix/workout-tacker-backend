import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {NotFoundError} from '../../errors';
import {DailyStat} from '../../models';

export const getDailyStat = async (req: Request, res: Response) => {
  const {_id} = req.body;

  let result;

  if (!_id) {
    result = await DailyStat.find({}, {__v: 0}) ?? [];
  } else {
    result = await DailyStat.findById(_id, {__v: 0});
    if (!result) throw new NotFoundError(`No dailyStat found with _id ${_id}`);
  }


  res.status(StatusCodes.OK).json(result);
};
