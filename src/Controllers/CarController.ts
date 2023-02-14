import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private service: CarService;

  constructor(private req: Request, private res: Response, private next: NextFunction) {
    this.service = new CarService();
  }

  public register = async () => {
    const carRequest = this.req.body as ICar;
    const newCar = await this.service.register(carRequest);
    return this.res.status(201).json(newCar);
  };

  public getAll = async () => {
    const cars = await this.service.getAll();
    return this.res.status(200).json(cars);
  };

  public getById = async () => {
    const { id } = this.req.params;
    try {
      const car = await this.service.getById(id);
      return this.res.status(200).json(car);
    } catch (err) {
      return this.res.status(404).json({ message: (err as Error).message });
    }
  };
}
