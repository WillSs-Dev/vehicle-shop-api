// import chai, { expect } from 'chai';
// import chaiHttp from 'chai-http';
// import sinon from 'sinon';
// import app from '../../../src/app';
// import Car from '../../../src/Domains/Car';
// import CarService from '../../../src/Services/CarService';
// import {
//   mockCarListResponse,
//   mockCarRequest,
//   mockCarResponse,
//   mockMongoId,
// } from '../../mocks';

// chai.use(chaiHttp);
// const ERROR_MESSAGE = 'Car not found';

// describe('Car Controller implementation', function () {
//   const carService = new CarService();

//   afterEach(function () {
//     sinon.restore();
//   });

//   it('Should register a car in the DB', async function () {
//     const responseBody = new Car(mockCarResponse);
//     sinon.stub(carService, 'register').resolves(responseBody);

//     chai.request(app).post('/cars').send(mockCarRequest).end((__err, res) => {
//       expect(res).to.have.status(201);
//       expect(res.body).to.be.deep.equal(mockCarResponse);
//     });
//   });

//   it('Should list all cars in the DB', async function () {
//     const responseBody = mockCarListResponse.map((car) => new Car(car));
//     sinon.stub(carService, 'getAll').resolves(responseBody);

//     chai.request(app).get('/cars').end((__err, res) => {
//       expect(res).to.have.status(200);
//       expect(res.body).to.be.deep.equal(responseBody);
//     });
//   });

//   it('Should list a car by id in the DB', async function () {
//     const responseBody = new Car(mockCarResponse);
//     sinon.stub(carService, 'getById').resolves(responseBody);

//     chai.request(app).get(`/cars/${mockMongoId}`).end((__err, res) => {
//       expect(res).to.have.status(200);
//       expect(res.body).to.be.deep.equal(responseBody);
//     });
//   });

//   it('Should return an error if the car id is not found in the DB', async function () {
//     sinon.stub(carService, 'getById').throws(new Error(ERROR_MESSAGE));

//     chai.request(app).get(`/cars/${mockMongoId}`).end((__err, res) => {
//       expect(res).to.have.status(404);
//       expect(res.body).to.be.deep.equal({ message: ERROR_MESSAGE });
//     });
//   });

//   it('Should update a car by id in the DB', async function () {
//     const responseBody = new Car(mockCarResponse);
//     sinon.stub(carService, 'updateById').resolves(responseBody);

//     chai.request(app).put(`/cars/${mockMongoId}`).send(mockCarRequest).end((__err, res) => {
//       expect(res).to.have.status(200);
//       expect(res.body).to.be.deep.equal(responseBody);
//     });
//   });

//   it('Should return an error if the car to be updated is not found in the DB', async function () {
//     sinon.stub(carService, 'updateById').throws(new Error(ERROR_MESSAGE));

//     chai.request(app).get(`/cars/${mockMongoId}`).end((__err, res) => {
//       expect(res).to.have.status(404);
//       expect(res.body).to.be.deep.equal({ message: ERROR_MESSAGE });
//     });
//   });
// });
