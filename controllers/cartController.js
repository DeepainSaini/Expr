const getCartForUser = (req, res) => {
    const uId = req.params.userId;
    res.send(`Fetching cart for user with ID : ${uId}`);
};

const addProductToCart = (req, res) => {
    const usId = req.params.userId;
    res.send(`Adding product to cart for user with ID: ${usId}`);
};

module.exports = {
    getCartForUser,
    addProductToCart
};