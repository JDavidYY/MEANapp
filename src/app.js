
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.set('port', process.env.PORT || 4000);

//El app pueda entender los contentype y los datos de formulario
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require('./routes/employees.routes'));



module.exports = app;