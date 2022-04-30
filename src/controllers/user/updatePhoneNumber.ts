import { Request, Response } from 'express';

export const updatePhoneNumber = async (req: Request, res: Response) => {
  res.json({ msg: 'updatePhoneNumber' });
};
