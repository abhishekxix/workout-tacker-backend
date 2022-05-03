import type {CustomAPIError} from 'Interfaces';
import {StatusCodes} from 'http-status-codes';

/** */
export class NotFoundError implements CustomAPIError {
  readonly message: string;
  readonly code: number;

  /**
   * @param  {string} message
   */
  constructor(message:string) {
    this.message = message;
    this.code = StatusCodes.NOT_FOUND;
  }
}
