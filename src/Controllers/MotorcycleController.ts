import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private service: MotorcycleService;

  constructor(private req: Request, private res: Response) {
    this.service = new MotorcycleService();
  }

  public register = async () => {
    const motorcycleRequest = this.req.body;
    const newMotorcycle = await this.service.register(motorcycleRequest);
    return this.res.status(201).json(newMotorcycle);
  };
}
