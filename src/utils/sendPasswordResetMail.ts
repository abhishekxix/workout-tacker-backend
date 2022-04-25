import { createJWT } from './createJWT';
import nodemailer from 'nodemailer';

export const sendPasswordResetMail = async (target: string, user: any) => {
  const { name, email, _id } = user;
  const tokenUser = { name, email, _id };
  const verificationToken = createJWT(
    tokenUser,
    process.env.JWT_VERIFICATION_LIFETIME as string
  );
  const mailTransporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASSWORD,
    },
  });
  let info = await mailTransporter.sendMail({
    from: `"No reply" <verification@workout-app>`,
    to: target,
    subject: 'Reset password',
    html: `Enter the following code to reset password: <br/>
    <code>${verificationToken}</code>`,
  });
};
