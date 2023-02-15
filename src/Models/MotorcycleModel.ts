import { model, Model, models, Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
// import AbstractODM from './AbstractODM';

export default class MotorcycleModel {
  private model: Model<IMotorcycle>;
  private schema: Schema;

  constructor() {
    // super();
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
      status: { type: Boolean, required: false, default: false },
    });

    this.model = models.Motorcycle || model('Motorcycle', this.schema);
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
