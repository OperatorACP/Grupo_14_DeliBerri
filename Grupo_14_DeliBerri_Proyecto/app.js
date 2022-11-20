const { join } = require("path");
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const cookies = require("cookie-parser");
const cors = require('cors')

const server = express();
server.use(express.urlencoded({ extended: true }));

const statics = require("./modules/static");
server.use(cookies());
server.use(statics(join(__dirname, "/public")));
server.use(methodOverride("m"));
server.use(session( {secret: "Shh, it's a secret!",resave: false,saveUninitialized: false,} ));
server.use(cors());
server.use(userLoggedMiddleware);


server.set("views", join(__dirname, "./views"));
server.set("view engine", "ejs");

server.use(require("./routes/mainRoutes"));
server.use(require("./routes/productsRoutes"));
server.use(require("./routes/categoriesRoutes"));
server.use(require("./routes/usersRoutes"));

// server.use((req, res, next) => {
//   res.status(404).render("error404.ejs");
// });

// APIs // 

const apiProductsRouter = require('./routes/api/productsRoutes');
server.use ('/api/products', apiProductsRouter);

const apiUsersRouter = require('./routes/api/usersRoutes')
server.use ('/api', apiUsersRouter);


const { port, start } = require("./modules/server");
server.listen(port, start());