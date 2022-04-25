import { createJWT } from './createJWT';
import nodemailer from 'nodemailer';
import { createTokenUser } from './createTokenUser';

export const sendVerificationMail = async (user: any) => {
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
  let info = await mailTransporter.sendMail({
    from: `"No reply" <verification@workout-app>`,
    to: user.email,
    subject: 'Verify email address',
    html: `Click the following link to verify your email address: <br/>
            <a href="http://localhost:${process.env.PORT}/api/v1/auth/verifyEmail/${verificationToken}" target="_blank">Verify email</a> <br/>
            If clicking on the above link does not work, paste the following link in the url bar in a web browser: <br/>
            <a href="http://localhost:${process.env.PORT}/api/v1/auth/verifyEmail/${verificationToken}" target="_blank">http://localhost:${process.env.PORT}/api/v1/auth/verifyEmail/${verificationToken}</a>`,
  });
};
