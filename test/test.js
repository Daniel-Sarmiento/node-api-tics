let request = require('supertest');
let app = require('../index.js');

describe('GET /test', ()=>{

 it('respuesta: URL Test', (done)=> {
 request(app).get('/test').expect('URL Test', done);
 });

});