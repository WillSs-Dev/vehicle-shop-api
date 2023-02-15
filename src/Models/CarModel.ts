import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarModel extends AbstractODM<ICar> {
  constructor() {
    super(
      {
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        buyValue: { type: Number, required: true },
        doorsQty: { type: Number, required: true },
        seatsQty: { type: Number, required: true },
        status: { type: Boolean, required: false, default: false },
      },
      'Car',
    );
  }

  public register = async (car: ICar): Promise<ICar> => this.model.create(car);

  public getAll = async (): Promise<ICar[]> => this.model.find();

  public getById = async (id: string): Promise<ICar | null> =>
    this.model.findById(id);

  public updateById = async (id: string, carData: ICar): Promise<ICar | null> =>
    this.model.findByIdAndUpdate(id, { $set: carData }, { new: true });
}
