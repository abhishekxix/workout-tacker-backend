import express from 'express';
import {
  deleteAccount,
  getUser,
  updateEmail,
  updatePassword,
  updatePhoneNumber,
  updateUser,
  verifyDeleteAccount,
} from '../controllers/user';
import {authenticateUser} from '../middleware';

// eslint-disable-next-line new-cap
export const userRouter = express.Router();

userRouter.use(authenticateUser);

userRouter.route('/').get(getUser).patch(updateUser);
userRouter.route('/updateEmail').patch(updateEmail);
userRouter.route('/updatePhoneNumber').patch(updatePhoneNumber);
userRouter.route('/updatePassword').patch(updatePassword);
userRouter
    .route('/delete')
    .post(deleteAccount)
    .delete(verifyDeleteAccount);
