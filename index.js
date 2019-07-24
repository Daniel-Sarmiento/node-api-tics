let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('Deploy automático con Jenkins');
})

app.listen(PORT);

module.exports = app;