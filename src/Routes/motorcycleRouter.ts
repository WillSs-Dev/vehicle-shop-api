import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter.post('/', (req, res) => new MotorcycleController(req, res).register());

export default motorcycleRouter;
