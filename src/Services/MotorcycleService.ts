import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';
import Motorcycle from '../Domains/Motorcycle';

export default class MotorcycleService {
  private model: MotorcycleModel;

  constructor() {
    this.model = new MotorcycleModel();
  }

  public generateDomain = (newMotorcycle: IMotorcycle) => new Motorcycle(newMotorcycle);

  public register = async (motorcycle: IMotorcycle): Promise<Motorcycle> => {
    const newMotorcycle = await this.model.register(motorcycle);
    return this.generateDomain(newMotorcycle);
  };

  public getAll = async (): Promise<Motorcycle[]> => {
    const motorcycles = await this.model.getAll();
    return motorcycles.map((motorcycle) => this.generateDomain(motorcycle));
  };

  public getById = async (id: string): Promise<Motorcycle> => {
    const motorcycle = await this.model.getById(id);
    if (!motorcycle) throw new Error('Motorcycle not found');
    return this.generateDomain(motorcycle);
  };
}
