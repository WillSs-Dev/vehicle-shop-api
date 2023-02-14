import { Router } from 'express';
import CarController from '../Controllers/CarController';
import validateId from '../Middlewares/ValidateId';

const CarRouter = Router();

CarRouter.post('/', (req, res, next) =>
  new CarController(req, res, next).register());

CarRouter.get('/', (req, res, next) =>
  new CarController(req, res, next).getAll());

CarRouter.get('/:id', validateId, (req, res, next) =>
  new CarController(req, res, next).getById());

export default CarRouter;
