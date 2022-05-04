import {Request, Response} from 'express';

export const getMeasurement = async (req: Request, res: Response) => {
  res.end('getMeasurement');
};
