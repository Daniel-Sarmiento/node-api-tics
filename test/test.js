let request = require('supertest');
let app = require('../index.js');

describe('GET /test', ()=>{

 it('respuesta: Hola Mundo', (done)=> {
 request(app).get('/test').expect('Hola Mundo', done);
 });

});