import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/monsters', () => {

  it('responds with JSON array', async () => {
    const res = await chai.request(app).get('/api/v1/monsters')
    expect(res.status).to.equal(200);
    expect(res).to.be.json;
    expect(res.body).to.be.an('array');
  });

});

describe('GET api/v1/monsters/:id', () => {

  it('responds with single JSON object', async () => {
    const res = await chai.request(app).get('/api/v1/monsters/1')
    expect(res.status).to.equal(200);
    expect(res).to.be.json;
    expect(res.body).to.be.an('object');
  });

});
