import express from 'express';
import {
  createDailyStat,
  deleteDailyStat,
  getDailyStat,
  updateDailyStat,
} from '../controllers/dailyStat';
import {authenticateUser} from '../middleware';

// eslint-disable-next-line new-cap
export const dailyStatRouter = express.Router();
dailyStatRouter.use(authenticateUser);

dailyStatRouter
    .route('/')
    .get(getDailyStat)
    .post(createDailyStat)
    .patch(updateDailyStat);
dailyStatRouter.route('/delete').delete(deleteDailyStat);
