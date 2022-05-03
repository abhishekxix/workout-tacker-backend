import express from 'express';
import {
  createDailyStat,
  deleteDailyStat,
  getDailyStat,
  updateDailyStat,
} from '../controllers/dailyStat';

// eslint-disable-next-line new-cap
export const dailyStatRouter = express.Router();

dailyStatRouter
    .route('/')
    .get(getDailyStat)
    .post(createDailyStat)
    .patch(updateDailyStat);
dailyStatRouter.route('/delete').delete(deleteDailyStat);
