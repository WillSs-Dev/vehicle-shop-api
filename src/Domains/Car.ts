import ICar from '../Interfaces/ICar';

export default class Car {
  public id: string | undefined;
  public model: string;
  public year: number;
  public color: string;
  public buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;
  public status?: boolean;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this._doorsQty = car.doorsQty;
    this._seatsQty = car.seatsQty;
    this.status = car.status || false;
  }

  get doorsQty(): number {
    return this._doorsQty;
  }

  get seatsQty(): number {
    return this._seatsQty;
  }
}
