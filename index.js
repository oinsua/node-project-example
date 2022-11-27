const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.sendFile('./static/index.html', {root: __dirname});
})

app.get('/about', (req, res) =>{
    res.send("This is About");
})

//middleware
app.use(morgan('dev'));

app.get('/services/', (req, res) =>{
    console.log('req.query: ', req.query);
    console.log('req.headers: ', req.headers);
    res.status(200).json({name: "Esteban",lastname: "Insua Garcia"});
})

app.get('/products/:name/:lastName', (req, res) =>{
    console.log('req.params: ', req.params);
    console.log('req.headers: ', req.headers);
    res.status(200).json({name: "Esteban",lastname: "Insua Garcia"});
})

app.post('/products', (req, res) =>{
    console.log('req.body: ', req.body);
    console.log('req.headers: ', req.headers);
    console.log('req.baseUrl: ', req.baseUrl);
    res.status(200).send("this is post")
})

app.put('/products', (req, res) =>{
    console.log('req.body: ', req.body);
    console.log('req.headers: ', req.headers);
    console.log('req.baseUrl: ', req.baseUrl);
    res.status(200).send("this is update")
})

app.patch('/products', (req, res) =>{
    console.log('req.body: ', req.body);
    console.log('req.headers: ', req.headers);
    console.log('req.baseUrl: ', req.baseUrl);
    res.status(200).send("this is path");
})

app.delete('/products', (req, res) =>{
    res.status(200).send("this is delete");
})

app.use((req, res) =>{
    res.status(404).send('status 404 not found');
})

app.listen(4000, () => {
    console.log('Server on port 4000')
})