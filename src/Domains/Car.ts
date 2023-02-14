import ICar from '../Interfaces/ICar';

export default class Car {
  public id: string | undefined;
  public model: string;
  public year: number;
  public color: string;
  public buyValue: number;
  readonly doorsQty: number;
  readonly seatsQty: number;
  public status?: boolean;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    this.status = car.status || false;
  }
}
