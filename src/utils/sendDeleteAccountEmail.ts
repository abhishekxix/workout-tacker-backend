import { createJWT, createTokenUser } from '.';
import nodemailer from 'nodemailer';

export const sendDeleteAccountEmail = async (user: any) => {
  const tokenUser = createTokenUser(user);
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

  await mailTransporter.sendMail({
    from: '"No reply" <verification@workout-app>',
    to: user.email,
    subject: 'Delete Account',
    html: `Enter the following code to Delete Account: <br/>
    <code>${verificationToken}</code>`,
  });
};
