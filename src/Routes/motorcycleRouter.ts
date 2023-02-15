import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import validateId from '../Middlewares/ValidateId';

const motorcycleRouter = Router();

motorcycleRouter.post('/', (req, res) =>
  new MotorcycleController(req, res).register());

motorcycleRouter.get('/', (req, res) =>
  new MotorcycleController(req, res).getAll());

motorcycleRouter.get('/:id', validateId, (req, res) =>
  new MotorcycleController(req, res).getById());

export default motorcycleRouter;
