import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private model: CarModel;
  
  constructor() {
    this.model = new CarModel();
  }

  public register = async (carRequest: ICar) => {
    const { status } = carRequest;
    const carData = { ...carRequest, status: status || false };
    const createdCar = await this.model.register(carData);
    return new Car(createdCar);
  };
}
