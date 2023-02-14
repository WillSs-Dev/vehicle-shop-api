import { expect } from 'chai';
// import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import CarModel from '../../../src/Models/CarModel';
import {
  // mockCarListResponse,
  mockCarRequest,
  mockCarResponse,
  // mockMongoId,
} from '../../mocks';

describe('Car Service implementation', function () {
  const carModel = new CarModel();

  it('Should register a car in the DB', async function () {
    sinon.stub(carModel, 'register').resolves(mockCarResponse);

    const service = new CarService();
    const response = await service.register(mockCarRequest);

    expect(response).to.be.deep.equal(mockCarResponse);
  });

  // it('Should list all cars in the DB', async function () {
  //   sinon.stub(carModel, 'getAll').resolves(mockCarListResponse);

  //   const service = new CarService();
  //   const response = await service.getAll();

  //   expect(response).to.be.deep.equal(mockCarListResponse);
  // });

  // it('Should list a car by id in the DB', async function () {
  //   sinon.stub(CarModel, 'getById').resolves(mockCarResponse);

  //   const service = new CarService();
  //   const response = await service.getById(mockMongoId);

  //   expect(response).to.be.deep.equal(mockCarResponse);
  // });

  // it('Should return an error if the car id is not found in the DB', async function () {
  //   sinon.stub(CarModel, 'getById').resolves([]);

  //   const service = new CarService();
  //   try {
  //     await service.getById(mockMongoId);
  //   } catch (error) {
  //     expect((error as Error).message).to.be.equal('Car not found');
  //   }
  // });

  // it('Should return an error if the car id is not a valid mongo id', async function () {
  //   sinon.stub(CarModel, 'getById').resolves(null);

  //   const service = new CarService();
  //   try {
  //     await service.getById('123InvalidId');
  //   } catch (error) {
  //     expect((error as Error).message).to.be.equal('Invalid mongo id');
  //   }

  //   expect(response).to.be.deep.equal({ error: 'Invalid mongo id' });
  // });

  // it('Should update a car by id in the DB', async function () {
  //   sinon.stub(CarModel, 'updateById').resolves(mockCarResponse);

  //   const service = new CarService();
  //   const response = await service.updateById(mockMongoId, mockCarRequest);

  //   expect(response).to.be.deep.equal(mockCarResponse);
  // });

  // it('Should return an error if the car to be updated is not found in the DB', async function () {
  //   sinon.stub(CarModel, 'updateById').resolves([]);

  //   const service = new CarService();
  //   try {
  //     await service.updateById(mockMongoId, mockCarRequest);
  //   } catch (error) {
  //     expect((error as Error).message).to.be.equal('Car not found');
  //   }
  // });

  // it('Should return an error if the car id to be updated is not a valid mongo id', async function () {
  //   sinon.stub(CarModel, 'updateById').resolves(null);

  //   const service = new CarService();
  //   try {
  //     await service.updateById('123InvalidId', mockCarRequest);
  //   } catch (error) {
  //     expect((error as Error).message).to.be.equal('Invalid mongo id');
  //   }
  // });
});
