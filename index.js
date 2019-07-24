let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('Hola Mundo');
})

app.listen(PORT);

module.exports = app;