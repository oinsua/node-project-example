const express = require('express');

const router = express.Router();

let products = [
    {
       id: 1,
       product: "movil",
       price: 130
    }
 ];

// Routes Get /products
router.get('/products', (req, res) => {
    res.status(200).send(products); 
 });

// Routes Post /products
router.post('/products', (req, res) => {
    products.push(req.body);
    res.status(201).send(`Create a product ${req.body.id}`); 
 });

// Routes Get one /products/:id
router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const productFind = products.find(product => product.id === parseInt(id));
    if(typeof productFind === 'undefined'){
      return res.status(404).json({message: 'Product not found'});
    }
    res.status(202).json(productFind); 
 });

//Routes Update one products/:id
router.put('/products/:id', (req, res) => {
   const { price } = req.query;
   const { id } = req.params;
    //find the product
    const productFind = products.find(product => product.id === parseInt(id));
    if(typeof productFind === 'undefined'){
      return res.status(404).json({message: 'Product not found'});
    }

    products = products.map(product => product.id === parseInt(id) ? {...product, price: parseInt(price)} : product)

    res.status(202).json(products);
 })

 // Routes Delete one /products/:id
 router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    //find the product
    const productFind = products.find(product => product.id === parseInt(id));
    if(typeof productFind === 'undefined'){
      return res.status(404).json({message: 'Product not found'});
    }
    //delete prooduct
    products = products.filter(product => product.id !== parseInt(id));
    res.status(202).json(products); 
 });

 module.exports = router;