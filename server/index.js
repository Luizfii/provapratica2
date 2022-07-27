const express = require('express');
const app = express();
const db = require("mysql");


app.get('/', async(req,res) =>{
res.send('hello my friend!');
});
app.listen(3001, () =>(
    console.log('rodando servidor')
));