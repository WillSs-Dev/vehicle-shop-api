import { expect } from 'chai';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import CarModel from '../../../src/Models/CarModel';
import {
  mockCarListResponse,
  mockCarRequest,
  mockCarResponse,
  mockMongoId,
} from '../../mocks';

describe('Car Service implementation', function () {
  const carModel = new CarModel();

  afterEach(function () {
    sinon.restore();
  });

  it('Should register a car in the DB', async function () {
    sinon.stub(carModel, 'register').resolves(mockCarResponse);

    const service = new CarService();
    service.register(mockCarRequest).then((response) => {
      expect(response).to.be.deep.equal(mockCarResponse);
    });
  });

  it('Should list all cars in the DB', async function () {
    sinon.stub(carModel, 'getAll').resolves(mockCarListResponse);

    const service = new CarService();
    service.getAll().then((response) => {
      expect(response).to.be.deep.equal(mockCarListResponse);
    });
  });
  it('Should list a car by id in the DB', async function () {
    sinon.stub(carModel, 'getById').resolves(mockCarResponse);

    const service = new CarService();
    service.getById(mockMongoId).then((response) => {
      expect(response).to.be.deep.equal(mockCarResponse);
    });
  });

  it('Should return an error if the car id is not found in the DB', async function () {
    sinon.stub(carModel, 'getById').resolves(null);

    const service = new CarService();
    service.getById(mockMongoId).catch((err) => {
      expect(err).to.be.equal('Car not found');
    });
  });

  it('Should update a car by id in the DB', async function () {
    sinon.stub(carModel, 'updateById').resolves(mockCarResponse);

    const service = new CarService();
    service.updateById(mockMongoId, mockCarRequest).then((response) => {
      expect(response).to.be.deep.equal(mockCarResponse);
    });
  });

  it('Should return an error if the car to be updated is not found in the DB', async function () {
    sinon.stub(carModel, 'updateById').resolves(null);

    const service = new CarService();
    service.updateById(mockMongoId, mockCarRequest).catch((err) => {
      expect(err).to.be.equal('Car not found');
    });
  });
});
