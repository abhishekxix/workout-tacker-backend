import express from 'express';
import {
  createMeasurement,
  deleteMeasurement,
  getMeasurement,
  updateMeasurement,
} from '../controllers/measurement';
import {authenticateUser} from '../middleware';

// eslint-disable-next-line new-cap
export const measurementRouter = express.Router();
measurementRouter.use(authenticateUser);


measurementRouter.route('/')
    .get(getMeasurement)
    .post(createMeasurement)
    .patch(updateMeasurement);

measurementRouter.route('/delete').delete(deleteMeasurement);
