import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private model: CarModel;
  
  constructor() {
    this.model = new CarModel();
  }

  private generateDomain = (newCar: ICar) => {
    const carDomain = new Car(newCar);
    return {
      id: carDomain.id,
      model: carDomain.model,
      year: carDomain.year,
      color: carDomain.color,
      buyValue: carDomain.buyValue,
      doorsQty: carDomain.doorsQty,
      seatsQty: carDomain.seatsQty,
      status: carDomain.status,
    };
  };

  public register = async (carRequest: ICar) => {
    const { status } = carRequest;
    const carData = { ...carRequest, status: status || false };
    const createdCar = await this.model.register(carData);
    const newCar = new Car(createdCar);
    return this.generateDomain(newCar);
  };
}
