const express  = require('express');

const app  = express();

const userRouter = require('./routes/userRoutes');
const cartRouter = require('./routes/cartRoutes');
const productRouter = require('./routes/productRoutes');

const PORT = 4000;


app.use(userRouter);
app.use(productRouter);
app.use(cartRouter);


app.use((req,res)=>{
    res.status(404).send('Page Not Found');
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

