import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../src/app';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  mockMongoId,
  mockMotorcycleListResponse,
  mockMotorcycleRequest,
  mockMotorcycleResponse,
} from '../../mocks';

chai.use(chaiHttp);
const ERROR_MESSAGE = 'Motorcycle not found';

describe('Motorcycle Controller implementation', function () {
  const motorcycleService = new MotorcycleService();

  afterEach(function () {
    sinon.restore();
  });

  it('Should register a car in the DB', async function () {
    const responseBody = new Motorcycle(mockMotorcycleResponse);
    sinon.stub(motorcycleService, 'register').resolves(responseBody);

    chai.request(app).post('/motorcycles').send(mockMotorcycleRequest).end((__err, res) => {
      expect(res).to.have.status(201);
      expect(res.body).to.be.deep.equal(mockMotorcycleResponse);
    });
  });

  it('Should list all cars in the DB', async function () {
    const responseBody = mockMotorcycleListResponse.map((motorcycle) => new Motorcycle(motorcycle));
    sinon.stub(motorcycleService, 'getAll').resolves(responseBody);

    chai.request(app).get('/motorcycles').end((__err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.deep.equal(responseBody);
    });
  });

  it('Should list a car by id in the DB', async function () {
    const responseBody = new Motorcycle(mockMotorcycleResponse);
    sinon.stub(motorcycleService, 'getById').resolves(responseBody);

    chai.request(app).get(`/motorcycles/${mockMongoId}`).end((__err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.deep.equal(responseBody);
    });
  });

  it('Should return an error if the car id is not found in the DB', async function () {
    sinon.stub(motorcycleService, 'getById').throws(new Error(ERROR_MESSAGE));

    chai.request(app).get(`/motorcycles/${mockMongoId}`).end((__err, res) => {
      expect(res).to.have.status(404);
      expect(res.body).to.be.deep.equal({ message: ERROR_MESSAGE });
    });
  });

  it('Should update a car by id in the DB', async function () {
    const responseBody = new Motorcycle(mockMotorcycleResponse);
    sinon.stub(motorcycleService, 'updateById').resolves(responseBody);

    chai.request(app)
      .put(`/motorcycles/${mockMongoId}`)
      .send(mockMotorcycleRequest)
      .end((__err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.deep.equal(responseBody);
      });
  });

  it('Should return an error if the car to be updated is not found in the DB', async function () {
    sinon.stub(motorcycleService, 'updateById').throws(new Error(ERROR_MESSAGE));

    chai.request(app).get(`/motorcycles/${mockMongoId}`).end((__err, res) => {
      expect(res).to.have.status(404);
      expect(res.body).to.be.deep.equal({ message: ERROR_MESSAGE });
    });
  });
});
