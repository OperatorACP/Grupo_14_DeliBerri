const express = require('express');
const app = express();
app.use(express.static('public'));
const port = process.env.PORT || 3000;

app.listen(port,  () => {
    console.log("Servidor corriendo en el puerto " + port);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/promociones', (req,res)=>{
    res.sendFile(__dirname + '/views/promociones.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/cervezas', (req,res)=>{
    res.sendFile(__dirname + '/views/cervezas.html');
});

app.get('/vinos', (req,res)=>{
    res.sendFile(__dirname + '/views/vinos.html');
});

app.get('/licores', (req,res)=>{
    res.sendFile(__dirname + '/views/licores.html');
});





