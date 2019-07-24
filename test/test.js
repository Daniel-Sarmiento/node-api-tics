let request = require('supertest');
let app = require('../index.js');

describe('GET /', ()=>{

 it('respuesta: Hola Mundo', (done)=> {
 request(app).get('/').expect('Hola Mundo', done);
 });

});