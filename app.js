const bodyParser = require('body-parser');
const morgan = require ('morgan');
const express =require('express');
const exphbs= require('express-handlebars')
const mongoose = require('mongoose');
const path = require( 'path');

const app = express();
//credenciales
const userRoutes=require('./routes/users')
const user ="Roger";
const password="xWCILoqNVtHvPfAa";
const dbname="esteticacanina";
const url=`mongodb+srv://${user}:${password}@cluster0.b4jrj.mongodb.net/${dbname}?retryWrites=true&w=majority`;


mongoose.Promise = global.Promise;
mongoose.connect(url)
.then(db =>console.log('Db concected'))
.catch(err => console.log(err))

//setings
app.set('port', process.env.PORT  || 3000);
app.set('views', path.join(__dirname,'views'));
//Definimos el motor de plantilla de express-handlebars
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    extname:'.hbs'
}));
app.set('view engine','.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use (bodyParser.json());

//rutas
app.use('/users',userRoutes);  //ruta pruebas Mongo
app.use(require('./routes/index')); //ruta main
//static files
app.use(express.static(path.join(__dirname,'public')));

module.exports =app;
