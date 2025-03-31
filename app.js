const express  = require('express');

const app  = express();

const productRouter = require('./routes/products');
const categoryRouter = require('./routes/categories');

const PORT = 4000;

app.use((req,res,next)=>{
    
    console.log(`${req.method} request made to ${req.url}`)
    next();
});

app.use(productRouter);
app.use(categoryRouter);

app.get('*',(req,res)=>{
    res.status(404).send('<h1>404 - page not found</h1>');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});