const express = require('express');
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join (__dirname, '/angularfronted/dist/angularfronted')));

app.get('/test', (req,res)=>{
    res.send('Hola Mundo');
})

app.get('/', function(req, res) {
	res.sendfile('./angularfronted/dist/angularfronted/index.html');
});

app.listen(PORT);

module.exports = app;