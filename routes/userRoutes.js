const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
    res.send('Fetching all users');
});

router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Fetchin user with ID : ${userId}`);
});

router.post('/users', (req, res) => {
    res.send('Adding a new user.');
});

module.exports = router;