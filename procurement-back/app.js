require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
//const hbs          = require('hbs');
const logger       = require('morgan');
const path         = require('path');
//const mysql        = require ('mysql');
const cors         = require ('cors');



const app = express();


// Para meternos a mysql:
/*
const connection = mysql.createConnection({
  host:process.env.HOST_DB,
  user:process.env.USER_DB,
  password:process.env.PASSWORD_DB,
  database:process.env.DB,
  reconnect:true
});

connection.connect(err=>{
  if(err) {return err;}
});
*/
// Este era todo el pedo de la conexión.

app.use(cors({
  origin: [process.env.FRONT]
}));

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

//conexion sequelize:
require ('./sequelize')
//


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);

const API = require('./routes/api/api');
app.use('/api', API);

const AUTH = require('./routes/api/auth/auth');
app.use('/api/auth', AUTH);

const LOGIN = require('./routes/api/auth/login');
app.use('/api/login', LOGIN);

module.exports = app;
