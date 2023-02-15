import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter.post('/', (req, res) => new MotorcycleController(req, res).register());

motorcycleRouter.get('/', (req, res) => new MotorcycleController(req, res).getAll());

motorcycleRouter.get('/:id', (req, res) => new MotorcycleController(req, res).getById());

export default motorcycleRouter;
