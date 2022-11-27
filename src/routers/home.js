const express = require('express');
const axios = require('axios');

const router = express.Router();

// Routes /
router.get('/', (req, res) => {
    res.status(200).send('Ready in localhost 4000'); 
 });

router.get('/page', (req, res) => {
    const title = 'Page with Express 123';
    const isActive = false;
    const users = [
        {
            id: 1,
            name: "Esteban",
            lastName: "Insua Rodriguez"
        },
        {
            id: 2,
            name: "Meilyn",
            lastName: "Lafita Insua"
        }
    ];
    res.render('index', { title, isActive, users }); 
 });

router.get('/posts', async (req, res) => {
    const title = 'List of Posts';
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.render('post', { title, posts: posts.data }); 
 });

module.exports = router;