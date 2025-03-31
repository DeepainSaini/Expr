const getAllUsers = (req, res) => {
    res.send('Fetching all users');
};

const addUser = (req, res) => {
    res.send('Adding a new user.');
};

const getUserById = (req, res) => {
    const userId = req.params.id;
    res.send(`Fetchin user with ID : ${userId}`);
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser
};