import { Router } from 'express';
import CarController from '../Controllers/CarController';
import validateId from '../Middlewares/ValidateId';

const carRouter = Router();

carRouter.post('/', (req, res, next) =>
  new CarController(req, res, next).register());

carRouter.get('/', (req, res, next) =>
  new CarController(req, res, next).getAll());

carRouter.get('/:id', validateId, (req, res, next) =>
  new CarController(req, res, next).getById());

export default carRouter;
