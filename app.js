const express  = require('express');

const app  = express();

const booksRouter = require('./routes/books');

const PORT = 4000;

app.use(express.json());


app.use(booksRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});