import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleModel extends AbstractODM<IMotorcycle> {
  constructor() {
    super(
      {
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        buyValue: { type: Number, required: true },
        category: { type: String, required: true },
        engineCapacity: { type: Number, required: true },
        status: { type: Boolean, required: false, default: false },
      },
      'Motorcycle',
    );
  }

  public register = async (motorcycle: IMotorcycle): Promise<IMotorcycle> =>
    this.model.create(motorcycle);

  public getAll = async (): Promise<IMotorcycle[]> => this.model.find();

  public getById = async (id: string): Promise<IMotorcycle | null> =>
    this.model.findById(id);

  public updateById = async (
    id: string,
    motorcycleData: IMotorcycle,
  ): Promise<IMotorcycle | null> =>
    this.model.findByIdAndUpdate(id, { $set: motorcycleData }, { new: true });
}
