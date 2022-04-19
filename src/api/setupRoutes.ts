import { Express } from 'express';
import { authRouter } from '@routes';

export const setupRoutes = (app: Express): void => {
  const API_ROOT = '/api/v1';
  app.use(API_ROOT + '/auth', authRouter);
};
