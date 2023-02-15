import IVehicle from '../Interfaces/IVehicle';

export default abstract class AbstractODM {
  public abstract register(vehicle: IVehicle): Promise<IVehicle>;

  public abstract getAll(): Promise<IVehicle[]>;

  public abstract getById(id: string): Promise<IVehicle | null>;

  public abstract updateById(
    id: string,
    vehicleData: IVehicle,
  ): Promise<IVehicle | null>;
}
