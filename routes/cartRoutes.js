const express = require('express');

const router = express.Router();

router.get('/cart/:userId', (req, res) => {
    const uId = req.params.userId;
    res.send(`Fetching cart for user with ID : ${uId}`);
});

router.post('/cart/:userId', (req, res) => {
    const usId = req.params.userId;
    res.send(`Adding product to cart for user with ID: ${usId}`);
});

module.exports = router;