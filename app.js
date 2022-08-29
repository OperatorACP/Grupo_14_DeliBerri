const express = require('express');
const app = express();
const router = express.Router()
const path = require('path')
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public');
let users = path.join('database', 'users.json');
let productos = path.join('database','productos.json');


app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname, './source/views'));
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({
    extended: false
 }));
 
 app.use(bodyParser.json());

app.listen(port,  () => {
    console.log("Servidor corriendo en el puerto " + port);
});



//router.get('/productos', (req, res) => {
    //res.send(req.query)
  //})


app.get('/', (req,res)=>{
    res.render(__dirname + '/source/views/index.ejs');
});

app.get('/promociones', (req,res)=>{
    res.render(__dirname + '/source/views/products/promociones.ejs');
});

app.get('/vinos', (req,res)=>{
    res.render(__dirname + '/source/views/products/vinos.ejs');
});

app.get('/cervezas', (req,res)=>{
    res.render(__dirname + '/source/views/products/cervezas.ejs');
});

app.get('/licores', (req,res)=>{
    res.render(__dirname + '/source/views/products/licores.ejs');
});

app.get('/login', (req,res)=>{
    res.render(__dirname + '/source/views/users/login.ejs');
});

app.get('/register', (req,res)=>{
    res.render(__dirname + '/source/views/users/register.ejs');
});

app.get('/carrito', (req,res)=>{
    res.render(__dirname + '/source/views/products/carrito.ejs');
});


app.get('/detalleProducto', (req,res)=>{
    res.render(__dirname + '/source/views/products/detalleProducto.ejs');
});


app.get('/edicionProductos', (req,res)=>{
    res.render(__dirname + '/source/views/products/edicionProductos.ejs');
});


// app.get('/create', (req,res)=>{
//     res.render(__dirname + '/source/views/products/create.ejs');
// });

const rutasProductos = require('./source/routes/productos.routes');

app.use(rutasProductos)








