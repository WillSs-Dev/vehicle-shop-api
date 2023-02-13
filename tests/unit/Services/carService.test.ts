import { expect } from 'chai';
import sinon from 'sinon';
import {
  mockCarListResponse,
  mockCarRequest,
  mockCarResponse,
  mockMongoId,
} from '../../mocks';

describe('Car Service implementation', function () {
  it('Should register a car in the DB', async function () {
    sinon.stub(CarModel, 'register').resolves(mockCarResponse);

    const service = new CarServive();
    const response = await service.register(mockCarRequest);

    expect(response).to.be.deep.equal(mockCarResponse);
  });

  it('Should list all cars in the DB', async function () {
    sinon.stub(CarModel, 'getAll').resolves(mockCarListResponse);

    const service = new CarServive();
    const response = await service.getAll();

    expect(response).to.be.deep.equal(mockCarListResponse);
  });

  it('Should list a car by id in the DB', async function () {
    sinon.stub(CarModel, 'getById').resolves(mockCarResponse);

    const service = new CarServive();
    const response = await service.getById(mockMongoId);

    expect(response).to.be.deep.equal(mockCarResponse);
  });

  it('Should return an error if the car id is not found in the DB', async function () {
    sinon.stub(CarModel, 'getById').resolves([]);

    const service = new CarServive();
    try {
      await service.getById(mockMongoId);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Should return an error if the car id is not a valid mongo id', async function () {
    sinon.stub(CarModel, 'getById').resolves(null);

    const service = new CarServive();
    try {
      await service.getById('123InvalidId');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }

    expect(response).to.be.deep.equal({ error: 'Invalid mongo id' });
  });

  it('Should update a car by id in the DB', async function () {
    sinon.stub(CarModel, 'updateById').resolves(mockCarResponse);

    const service = new CarServive();
    const response = await service.updateById(mockMongoId, mockCarRequest);

    expect(response).to.be.deep.equal(mockCarResponse);
  });

  it('Should return an error if the car to be updated is not found in the DB', async function () {
    sinon.stub(CarModel, 'updateById').resolves([]);

    const service = new CarServive();
    try {
      await service.updateById(mockMongoId, mockCarRequest);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Should return an error if the car id to be updated is not a valid mongo id', async function () {
    sinon.stub(CarModel, 'updateById').resolves(null);

    const service = new CarServive();
    try {
      await service.updateById('123InvalidId', mockCarRequest);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});
