const express = require('express');
const app = express();

app.use('/' ,(req , res ,next)=>{
    console.log("Time is :" , Date.now());
    next();
})

app.use('/about',(req ,res,next)=>{
    console.log("About page accessed");
    next();
})

app.get('/',(req ,res)=>{
    res.send("Hello World");
})

app.get('/about',(req ,res)=>{
    res.send("About Page");
})

app.listen(8080);