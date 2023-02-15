import { Model, model, models, Schema, SchemaDefinition, SchemaDefinitionType } from 'mongoose';
// import IVehicle from '../Interfaces/IVehicle';

export default abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;

  constructor(schema: SchemaDefinition<SchemaDefinitionType<T>>, modelName: string) {
    this.schema = new Schema<T>({ ...schema });
    this.model = models[modelName] || model(modelName, this.schema);
  }

  // protected abstract register(vehicle: IVehicle): Promise<IVehicle>;

  // protected abstract getAll(): Promise<IVehicle[]>;

  // protected abstract getById(id: string): Promise<IVehicle | null>;

  // protected abstract updateById(
  //   id: string,
  //   vehicleData: IVehicle,
  // ): Promise<IVehicle | null>;
}
