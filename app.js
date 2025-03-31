const express  = require('express');

const app  = express();

const studentRouter = require('./routes/students');
const corseRouter = require('./routes/course');

const PORT = 4000;


app.use(studentRouter);
app.use(corseRouter);

app.use((req,res)=>{
    res.status(404).send('Page Not Found');
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});