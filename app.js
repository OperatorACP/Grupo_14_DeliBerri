const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public');


app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname, './source/views'));
app.use(express.static(publicPath));
app.use(express.urlencoded({
    extended: false
 }));
 
 app.use(express.json());

app.listen(port,  () => {
    console.log("Servidor corriendo en el puerto " + port);
});



//router.get('/productos', (req, res) => {
    //res.send(req.query)
  //})


app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/promociones', (req,res)=>{
    res.render('products/promociones');
});

app.get('/login', (req,res)=>{
    res.render('users/login');
});

app.get('/register', (req,res)=>{
    res.render('users/register');
});

app.get('/carrito', (req,res)=>{
    res.render('carts/list');
});



const rutasProductos = require('./source/routes/productos.routes');

app.use(rutasProductos)








