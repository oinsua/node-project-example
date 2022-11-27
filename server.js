const express = require('express');
const morgan = require('morgan');
const routers = require('./src/routers');
const ejs = require('ejs');
const path = require('path');

const app = express();

//setting
app.set('AppName', 'Express Nodejs First');
app.set('Port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

//middleware
app.use(express.json());
app.use(express.text());
app.use(morgan('dev'));


//Routers
app.use(routers);

 //middleware serve file on folder public.
 app.use('/static',express.static('./static')) //Serve all static file to client


app.listen(app.get('Port'), () => {
    console.log(`Server ${app.get('AppName')} on Port ${app.get('Port')}`);
})