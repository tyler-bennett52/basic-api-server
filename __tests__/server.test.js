'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const mockRequest = supertest(app);

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
    const response = await mockRequest.post('/', {fakeBody: 'this is fake'});
    expect(response.status).toEqual(404);
  });

  it('throws 500 error for /person request without a name', async() => {
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);
  });

  it('status 200 when /person request has correct query string', async () => {
    const response = await mockRequest.get('/person?name=Michael Jeffery Jordan');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("{\"name\":\"Michael Jeffery Jordan\"}");
  });
});