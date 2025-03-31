const express = require('express');

const router = express.Router();

router.get('/products', (req, res) => {
    res.send('Fetching all products');
});

router.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Fetchin user with ID : ${productId}`);
});

router.post('/products', (req, res) => {
    res.send('Adding a new product.');
});

module.exports = router;