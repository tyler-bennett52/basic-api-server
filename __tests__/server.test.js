'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { db } = require('../src/models/index.js');
const mockRequest = supertest(app);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});


describe('Server', () => {
  it('handles invalid paths', async () => {
    const response = await mockRequest.get('/invalid');
    expect(response.status).toEqual(404);
  });

  it('handles home route', async () => {
    const response = await mockRequest.get('/');
    expect(response.text).toEqual('Speak friend and enter');
  });

  it('404s when given an incorrect method', async () => {
    const response = await mockRequest.post('/');
    expect(response.status).toEqual(404);
  });

  it('throws 500 error for /person request without a name', async() => {
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);
  });

  it('Receive 201 and JSON for POST request', async () => {
    const mockHuman = {heightInches: 72, massKG: 100, eyeColor: 'brown'};
    await mockRequest.post('/human').send(mockHuman);
    const response = await mockRequest.post('/human').send(mockHuman);
    expect(response.status).toEqual(201);
    expect(response.body.heightInches).toEqual(72);
  });

  it('Read list of records using GET', async () => {
    const response = await mockRequest.get('/human');
    expect(response.body.length).toEqual(2)
    expect(typeof(response.body)).toEqual('object')
  });
  
  it('Read single record using GET', async () => {
    const response = await mockRequest.get('/human/2');
    expect(response.status).toEqual(200);
    expect(response.body.eyeColor).toEqual('brown');
  });

  it('Update record using PUT', async () => {
    const response = await mockRequest.put('/human/2').send({eyeColor: 'blue'});
    expect(response.status).toEqual(200);
    expect(response.body.eyeColor).toEqual('blue');
  });

  it('Update record using PUT', async () => {
    const mockHuman = {heightInches: 72, massKG: 100, eyeColor: 'brown'};
    await mockRequest.post('/human').send(mockHuman);
    const response = await mockRequest.delete('/human/3');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Item #3 is no more.');
  });
});