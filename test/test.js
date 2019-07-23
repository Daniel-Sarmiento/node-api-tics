let request = require('supertest');
let app = require('../index.js');

describe('GET /', ()=>{

 it('respond with Hola mundo', (done)=> {
 request(app).get('/').expect('Hola mundo', done);
 });

});