import type {CustomAPIError} from 'Interfaces';
import {StatusCodes} from 'http-status-codes';

export const BadRequestError = (message: string): CustomAPIError => {
  return {
    code: StatusCodes.BAD_REQUEST,
    message,
  };
};
