import type { CustomAPIError } from './CustomAPIError.interface';
import { StatusCodes } from 'http-status-codes';

export const NotFoundError = (message: string): CustomAPIError => {
  return {
    code: StatusCodes.NOT_FOUND,
    message,
  };
};
