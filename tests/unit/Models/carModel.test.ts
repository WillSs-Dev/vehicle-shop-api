import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import {
  mockCarListResponse,
  mockCarRequest,
  mockCarResponse,
  mockMongoId,
} from '../../mocks';

describe('Car Model implementation', function () {
  it('Should register a car in the DB', async function () {
    sinon
      .stub(Model, 'create')
      .resolves(mockCarResponse);

    const model = new CarModel();
    const response = model.register(
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
    const response = model.getAll();

    expect(response).to.be.deep.equal(
      mockCarListResponse,
    );
  });

  it('Should list a car by id in the DB', async function () {
    sinon
      .stub(Model, 'findById')
      .resolves(mockCarResponse);

    const model = new CarModel();
    const response = model.getById(mockMongoId);

    expect(response).to.be.deep.equal(
      mockCarResponse,
    );
  });

  it('Should return an empty array if the car id is not found in the DB', async function () {
    sinon.stub(Model, 'findById').resolves([]);

    const model = new CarModel();
    const response = model.getById(mockMongoId);

    expect(response).to.be.deep.equal([]);
  });

  it('Should return null if the car id is not a valid mongo id', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const model = new CarModel();
    const response = model.getById(
      '123InvalidId',
    );

    expect(response).to.be.deep.equal(null);
  });

  it('Should update a car in the DB', async function () {
    sinon
      .stub(Model, 'findByIdAndUpdate')
      .resolves(mockCarResponse);

    const model = new CarModel();
    const response = model.updateById(
      mockMongoId,
      mockCarRequest,
    );

    expect(response).to.be.deep.equal(
      mockCarResponse,
    );
  });

  it('Should return an empty array if the car to be updated is not found in the DB', async function () {
    sinon
      .stub(Model, 'findByIdAndUpdate')
      .resolves([]);

    const model = new CarModel();
    const response = model.updateById(
      mockMongoId,
      mockCarRequest,
    );

    expect(response).to.be.deep.equal([]);
  });

  it('Should return null if the car id to be updated is not a valid mongo id', async function () {
    sinon
      .stub(Model, 'findByIdAndUpdate')
      .resolves(null);

    const model = new CarModel();
    const response = model.updateById(
      '123InvalidId',
      mockCarRequest,
    );

    expect(response).to.be.deep.equal(null);
  });
});
