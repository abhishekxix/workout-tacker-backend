import type {CustomAPIError} from 'Interfaces';
import {StatusCodes} from 'http-status-codes';

/** */
export class ForbiddenError implements CustomAPIError {
  readonly message: string;
  readonly code: number;

  /**
   * @param  {string} message
   */
  constructor(message:string) {
    this.message = message;
    this.code = StatusCodes.FORBIDDEN;
  }
}

