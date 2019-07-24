let request = require('supertest');
let app = require('../index.js');

describe('GET /', ()=>{

 it('respuesta: Deploy automático con Jenkins', (done)=> {
 request(app).get('/').expect('Hola Mundo', done);
 });

});