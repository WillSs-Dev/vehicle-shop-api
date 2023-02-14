import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private model: CarModel;

  constructor() {
    this.model = new CarModel();
  }

  // private generateDomain = (newCar: ICar) => {
  //   const newA = new Car(newCar);
  //   console.log(newA);
  //   return newA;
  // };

  private generateDomain = (newCar: ICar) => new Car(newCar);

  public register = async (carRequest: ICar) => {
    const { status } = carRequest;
    const carData = { ...carRequest, status: status || false };
    const createdCar = await this.model.register(carData);
    return this.generateDomain(createdCar);
  };
}
