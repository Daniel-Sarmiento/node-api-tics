const request = require('supertest');
const app = require('../index.js');
const assert = require('assert');

describe('GET /test', ()=>{
 it('Respuesta: URL Test', (done)=> {
 request(app).get('/test').expect('URL Test', done);
 });
});


describe('Suma de 2 + 2', function () {
 it('La suma es 4', function () {
        assert.equal(2+2, 4);
    });
});