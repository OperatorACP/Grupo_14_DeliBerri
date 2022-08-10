const express = require('express');
const app = express();
app.set('view engine' , 'ejs')
app.set('views' , './views')
app.use(express.static('public'));
const port = process.env.PORT || 3000;

app.listen(port,  () => {
    console.log("Servidor corriendo en el puerto " + port);
});

app.get('/', (req,res)=>{
    res.render(__dirname + '/views/index.ejs');
});

app.get('/promociones', (req,res)=>{
    res.render(__dirname + '/views/products/promociones.ejs');
});

app.get('/vinos', (req,res)=>{
    res.render(__dirname + '/views/products/vinos.ejs');
});

app.get('/cervezas', (req,res)=>{
    res.render(__dirname + '/views/products/cervezas.ejs');
});

app.get('/licores', (req,res)=>{
    res.render(__dirname + '/views/products/licores.ejs');
});

app.get('/login', (req,res)=>{
    res.render(__dirname + '/views/users/login.ejs');
});

app.get('/register', (req,res)=>{
    res.render(__dirname + '/views/users/register.ejs');
});

app.get('/carrito', (req,res)=>{
    res.render(__dirname + '/views/products/carrito.ejs');
});

app.get('/detalleProducto', (req,res)=>{
    res.render(__dirname + '/views/products/detalleProducto.ejs');
});


app.get('/edicionProductos', (req,res)=>{
    res.render(__dirname + '/views/products/edicionProductos.ejs');
});










