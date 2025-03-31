const express = require('express');

const router = express.Router();

router.get('/categories', (req, res) => {
    res.send('Here is the list of all the categories.');
});

router.post('/categories', (req, res) => {
    res.send('A new category has been created.');
});

module.exports = router;
