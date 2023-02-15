import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private engineCapacity: number;
  private category: string;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.engineCapacity = motorcycle.engineCapacity;
    this.category = motorcycle.category;
  }
}
