import express from 'express';
import {
  signup,
  login,
  logout,
  verifyEmail,
  verifyPhone,
  resetPassword,
  verifyPasswordReset,
} from '../controllers/auth';

export const authRouter = express.Router();

authRouter.route('/signup').post(signup);
authRouter.route('/login').post(login);
authRouter.route('/logout').get(logout);
authRouter.route('/verifyEmail/:verificationToken').get(verifyEmail);
authRouter.route('/verifyPhone/:verificationToken').get(verifyPhone);
authRouter
  .route('/resetPassword')
  .post(resetPassword)
  .patch(verifyPasswordReset);
