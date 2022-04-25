import { createJWT } from '@utils';
import { User, TokenUser } from 'Interfaces';
import { mailTransporter } from './mailTransporter';

export const sendPasswordResetMail = async (target: string, user: User) => {
  const tokenUser: TokenUser = user;
  const verificationToken = createJWT(
    tokenUser,
    process.env.JWT_VERIFICATION_LIFETIME as string
  );

  let info = await mailTransporter.sendMail({
    from: `"No reply" <verification@workout-app>`,
    to: target,
    subject: 'Reset password',
    html: `Enter the following code to reset password: <br/>
    <code>${verificationToken}</code>`,
  });
};
