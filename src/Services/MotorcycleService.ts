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
}
