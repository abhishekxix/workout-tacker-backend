import {Response} from 'express';

/**
 * @param  {Response} res
 * @param  {string} localVar
 */

export const setResLocal = (
    res: Response, localVar: string, value: any,
): void => {
  res.locals[localVar] = value;
};
