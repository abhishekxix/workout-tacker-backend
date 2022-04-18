import type { CustomAPIError } from './CustomAPIError.interface';
import { StatusCodes } from 'http-status-codes';

export const ForbiddenError = (message: string): CustomAPIError => {
  return {
    code: StatusCodes.FORBIDDEN,
    message,
  };
};
