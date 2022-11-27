const home = require('./home');
const product = require('./products');
const { Router } = require('express')

const routers = Router();

routers.use(home);
routers.use(product);

module.exports = routers;
