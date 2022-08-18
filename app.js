const express = require('express');
const app = express();
const router = express.Router()
const path = require('path')
const port = process.env.PORT || 3000;

module.exports= router;

app.set('view engine' , 'ejs')
app.set('views' , './views')
app.use(express.static('public'));
app.listen(port,  () => {
    console.log("Servidor corriendo en el puerto " + port);
});



let users = path.join('data', 'users.json');
let usersDirection = path.dirname(users);
let productos = path.join('data','productos.json');
let productosDirection = path.dirname(productos);



router.get('/productos', (req, res) => {
    res.send(req.query)
  })



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










