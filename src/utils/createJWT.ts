import jwt, {JwtPayload} from 'jsonwebtoken';

export const createJWT = (
  payload: JwtPayload,
  lifetime: string | number | undefined
) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: lifetime,
  });
};
