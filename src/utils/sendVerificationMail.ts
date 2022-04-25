import { createJWT } from '@utils';
import { User, TokenUser } from 'Interfaces';
import { mailTransporter } from './mailTransporter';

export const sendVerificationMail = async (target: string, user: User) => {
  const tokenUser: TokenUser = user;
  const verificationToken = createJWT(
    tokenUser,
    process.env.JWT_VERIFICATION_LIFETIME as string
  );

  let info = await mailTransporter.sendMail({
    from: `"No reply" <verification@workout-app>`,
    to: target,
    subject: 'Verify email address',
    html: `Click the following link to verify your email address: <br/>
            <a href="http://localhost:${process.env.PORT}/api/v1/auth/verifyEmail/${verificationToken}" target="_blank">Verify email</a> <br/>
            If clicking on the above link does not work, paste the following link in the url bar in a web browser: <br/>
            <a href="http://localhost:${process.env.PORT}/api/v1/auth/verifyEmail/${verificationToken}" target="_blank"></a>`,
  });
};
