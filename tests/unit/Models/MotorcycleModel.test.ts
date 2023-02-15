import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleModel from '../../../src/Models/MotorcycleModel';
import {
  mockMongoId,
  mockMotorcycleListResponse,
  mockMotorcycleRequest,
  mockMotorcycleResponse,
} from '../../mocks';

describe('Motorcycle Model implementation', function () {
  const model = new MotorcycleModel();

  afterEach(function () {
    sinon.restore();
  });

  it('Should register a motorcycle in the DB', async function () {
    sinon.stub(Model, 'create').resolves(mockMotorcycleResponse);

    const response = await model.register(mockMotorcycleRequest);

    expect(response).to.be.deep.equal(mockMotorcycleResponse);
  });

  it('Should list all motorcycles in the DB', async function () {
    sinon.stub(Model, 'find').resolves(mockMotorcycleListResponse);

    const response = await model.getAll();
    expect(response).to.be.deep.equal(mockMotorcycleListResponse);
  });

  it('Should list a motorcycle by id in the DB', async function () {
    sinon.stub(Model, 'findById').resolves(mockMotorcycleResponse);

    const response = await model.getById(mockMongoId);

    expect(response).to.be.deep.equal(mockMotorcycleResponse);
  });

  it('Should return null if the motorcycle id is not found in the DB', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const response = await model.getById(mockMongoId);

    expect(response).to.be.deep.equal(null);
  });

  it('Should update a motorcycle in the DB', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(mockMotorcycleResponse);

    model.updateById(mockMongoId, mockMotorcycleRequest).then((response) => {
      expect(response).to.be.deep.equal(mockMotorcycleResponse);
    });
  });

  it(
    'Should return null if the motorcycle to be updated is not found in the DB',
    async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      model.updateById(mockMongoId, mockMotorcycleRequest).then((response) => {
        expect(response).to.be.deep.equal(null);
      });
    },
  );
});
