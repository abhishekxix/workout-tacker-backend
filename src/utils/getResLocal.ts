import {Response} from 'express';

/**
 * @param  {Response} res
 * @param  {string} localVar
 * @return {any}
 */

export const getResLocal = (res: Response, localVar: string): any => {
  return res.locals[localVar];
};
