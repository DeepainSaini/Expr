const path = require('path');

const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname,'../','view','product.html'));
};

const getProductById = (req, res) => {
    const productId = req.params.id;
    res.send(`Fetchin user with ID : ${productId}`);
};

const addProduct = (req, res) => {
    res.send('Adding a new product.');
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};