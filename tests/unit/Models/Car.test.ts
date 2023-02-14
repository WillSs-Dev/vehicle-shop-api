import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarModel from '../../../src/Models/CarModel';
import {
  mockCarListResponse,
  mockCarRequest,
  mockCarResponse,
  mockMongoId,
} from '../../mocks';

describe('Car Model implementation', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should register a car in the DB', async function () {
    sinon
      .stub(Model, 'create')
      .resolves(mockCarResponse);

    const model = new CarModel();
    const response = await model.register(
      mockCarRequest,
    );

    expect(response).to.be.deep.equal(
      mockCarResponse,
    );
  });

  it('Should list all cars in the DB', async function () {
    sinon
      .stub(Model, 'find')
      .resolves(mockCarListResponse);

    const model = new CarModel();
    const response = await model.getAll();

    expect(response).to.be.deep.equal(
      mockCarListResponse,
    );
  });

  it('Should list a car by id in the DB', async function () {
    sinon
      .stub(Model, 'findById')
      .resolves(mockCarResponse);

    const model = new CarModel();
    const response = await model.getById(mockMongoId);

    expect(response).to.be.deep.equal(
      mockCarResponse,
    );
  });

  it('Should return null if the car id is not found in the DB', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const model = new CarModel();
    const response = await model.getById(mockMongoId);

    expect(response).to.be.deep.equal(null);
  });

  it('Should update a car in the DB', async function () {
    sinon
      .stub(Model, 'findByIdAndUpdate')
      .resolves(mockCarResponse);

    const model = new CarModel();
    model.updateById(
      mockMongoId,
      mockCarRequest,
    ).then((response) => {
      expect(response).to.be.deep.equal(mockCarResponse);
    });
  });

  it('Should return null if the car to be updated is not found in the DB', async function () {
    sinon
      .stub(Model, 'findByIdAndUpdate')
      .resolves(null);

    const model = new CarModel();
    model.updateById(
      mockMongoId,
      mockCarRequest,
    ).then((response) => {
      expect(response).to.be.deep.equal(null);
    });
  });
});
