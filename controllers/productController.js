const getAllProducts = (req, res) => {
    res.send('Fetching all products');
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