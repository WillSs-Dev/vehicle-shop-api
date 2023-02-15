import { expect } from 'chai';
import sinon from 'sinon';
import {
  mockMongoId,
  mockMotorcycleListResponse,
  mockMotorcycleRequest,
  mockMotorcycleResponse,
} from '../../mocks';
import MotorcycleModel from '../../../src/Models/MotorcycleModel';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Motorcycle Service implementation', function () {
  const motorcycleModel = new MotorcycleModel();

  afterEach(function () {
    sinon.restore();
  });

  it('Should register a motorcycle in the DB', async function () {
    sinon.stub(motorcycleModel, 'register').resolves(mockMotorcycleResponse);

    const service = new MotorcycleService();
    service.register(mockMotorcycleRequest).then((response) => {
      expect(response).to.be.deep.equal(mockMotorcycleResponse);
    });
  });

  it('Should list all motorcycles in the DB', async function () {
    sinon.stub(motorcycleModel, 'getAll').resolves(mockMotorcycleListResponse);

    const service = new MotorcycleService();
    service.getAll().then((response) => {
      expect(response).to.be.deep.equal(mockMotorcycleListResponse);
    });
  });

  it('Should list a motorcycle by id in the DB', async function () {
    sinon.stub(motorcycleModel, 'getById').resolves(mockMotorcycleResponse);

    const service = new MotorcycleService();
    service.getById(mockMongoId).then((response) => {
      expect(response).to.be.deep.equal(mockMotorcycleResponse);
    });
  });

  it('Should return an error if the motorcycle id is not found in the DB', async function () {
    sinon.stub(motorcycleModel, 'getById').resolves(null);

    const service = new MotorcycleService();
    service.getById(mockMongoId).catch((err) => {
      expect((err as Error).message).to.be.equal('Motorcycle not found');
    });
  });

  // it('Should update a motorcycle by id in the DB', async function () {
  //   sinon.stub(motorcycleModel, 'updateById').resolves(mockMotorcycleResponse);

  //   const service = new MotorcycleService();
  //   service.updateById(mockMongoId, mockMotorcycleRequest).then((response) => {
  //     expect(response).to.be.deep.equal(mockMotorcycleResponse);
  //   });
  // });

  // it('Should return an error if the motorcycle to be updated is not found in the DB', async function () {
  //   sinon.stub(motorcycleModel, 'updateById').resolves(null);

  //   const service = new MotorcycleService();
  //   service.updateById(mockMongoId, mockMotorcycleRequest).catch((err) => {
  //     expect((err as Error).message).to.be.equal('Motorcycle not found');
  //   });
  // });
});
