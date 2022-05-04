import {Express} from 'express';
import {authRouter, dailyStatRouter, userRouter} from '../routes';

export const setupRoutes = (app: Express): void => {
  const API_ROOT = '/api/v1';
  app.use(API_ROOT + '/auth', authRouter);
  app.use(API_ROOT + '/user', userRouter);
  app.use(API_ROOT + '/dailyStat', dailyStatRouter);
};
