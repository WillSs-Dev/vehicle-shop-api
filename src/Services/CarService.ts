import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private model: CarModel;

  constructor() {
    this.model = new CarModel();
  }
  
  private generateDomain = (newCar: ICar) => new Car(newCar);

  public register = async (carRequest: ICar): Promise<Car> => {
    const { status } = carRequest;
    const carData = { ...carRequest, status: status || false };
    const createdCar = await this.model.register(carData);
    return this.generateDomain(createdCar);
  };

  public getAll = async (): Promise<Car[]> => {
    const cars = await this.model.getAll();
    return cars.map((car) => this.generateDomain(car));
  };

  public getById = async (id: string): Promise<Car> => {
    const car = await this.model.getById(id);
    if (!car) throw new Error('Car not found');
    return this.generateDomain(car);
  };

  public updateById = async (id: string, carRequest: ICar): Promise<Car> => {
    const car = await this.model.getById(id);
    if (!car) throw new Error('Car not found');
    const updatedCar = await this.model.updateById(id, carRequest);
    return this.generateDomain(updatedCar as ICar);
  };
}
