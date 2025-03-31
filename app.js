const express  = require('express');

const app  = express();

const PORT = 3000;

app.get('/products', (req, res) => {
    res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
    res.send('A new product has been added.');
});

app.get('/categories', (req, res) => {
    res.send('Here is the list of all the categories.');
});

app.post('/categories', (req, res) => {
    res.send('A new category has been created.');
});

app.get('*',(req,res)=>{
    res.status(404).send('<h1>404 - page not found</h1>');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});