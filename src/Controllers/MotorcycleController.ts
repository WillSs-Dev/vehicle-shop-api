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

  public getAll = async () => {
    const motorcycles = await this.service.getAll();
    return this.res.status(200).json(motorcycles);
  };

  public getById = async () => {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.getById(id);
      return this.res.status(200).json(motorcycle);
    } catch (err) {
      return this.res.status(404).json({ message: (err as Error).message });
    }
  };

  public updateById = async () => {
    const { id } = this.req.params;
    const motorcycleRequest = this.req.body;
    try {
      const updatedMotorcycle = await this.service.updateById(
        id,
        motorcycleRequest,
      );
      return this.res.status(200).json(updatedMotorcycle);
    } catch (err) {
      return this.res.status(404).json({ message: (err as Error).message });
    }
  };
}
