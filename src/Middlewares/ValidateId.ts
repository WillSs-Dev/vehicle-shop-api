import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const {
  Types: { ObjectId },
} = mongoose;

const validateId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(422).json({ message: 'Invalid mongo id' });
  }
  return next();
};

export default validateId;
