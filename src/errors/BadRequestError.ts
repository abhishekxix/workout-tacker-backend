import type {CustomAPIError} from 'Interfaces';
import {StatusCodes} from 'http-status-codes';

/** */
export class BadRequestError implements CustomAPIError {
  readonly message: string;
  readonly code: number;

  /**
   * @param  {string} message
   */
  constructor(message:string) {
    this.message = message;
    this.code = StatusCodes.BAD_REQUEST;
  }
}
