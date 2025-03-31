const express = require('express');

const router = express.Router();

router.get('/books', (req, res) => {
    console.log('Get request made to /books')
    res.send('Here is the list of books.');
});

router.post('/books', (req, res) => {
    console.log('Post request made to /books : ',req.body)
    res.send('Book has been added.');
});

module.exports = router;