import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Job Booking testing api', () => {

  it('should get all accepted job booking', () =>
    request(Server)
      .get('/api/v1/jobbooking/declined')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(2);
      }));
});
