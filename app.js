const express  = require('express');

const app  = express();

app.use((req,res,next)=>{

    req.user = "Guest";
    console.log(`User set to: ${req.user}`);
    next();
});

app.get('/welcome',(req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});



app.listen(3000);