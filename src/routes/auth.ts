import express from 'express';
import {
  signup,
  login,
  logout,
  verifyEmail,
  verifyPhone,
  resetPassword,
  verifyAndResetPassword,
  deleteAccount,
} from '../controllers/auth';

export const authRouter = express.Router();

authRouter.route('/signup').post(signup);
authRouter.route('/login').post(login);
authRouter.route('/logout').get(logout);
authRouter.route('/verifyEmail/:verificationToken').get(verifyEmail);
authRouter.route('/verifyPhone/:verificationToken').get(verifyPhone);
authRouter.route('/resetPassword').get(resetPassword);
authRouter
  .route('/verifyAndResetPassword/:verificationToken')
  .patch(verifyAndResetPassword);
authRouter.route('/deleteAccount').delete(deleteAccount);
