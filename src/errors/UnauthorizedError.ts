import type { CustomAPIError } from 'Interfaces';
import { StatusCodes } from 'http-status-codes';

export const UnauthorizedError = (message: string): CustomAPIError => {
  return {
    code: StatusCodes.UNAUTHORIZED,
    message,
  };
};
