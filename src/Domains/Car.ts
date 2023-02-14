import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  protected status?: boolean;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    this.status = car.status;
  }

  // protected get doorsQty() {
  //   return this._doorsQty;
  // }

  // protected get seatsQty() {
  //   return this._seatsQty;
  // }

  // protected get id() {
  //   return this._id;
  // }

  // protected get model() {
  //   return this._model;
  // }

  // protected get year() {
  //   return this._year;
  // }

  // protected get color() {
  //   return this._color;
  // }

  // public get buyValue() {
  //   return this._buyValue;
  // }

  // public get status() {
  //   return this._status;
  // }
}
