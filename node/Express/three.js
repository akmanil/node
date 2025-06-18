const express = require('express');
const app = express();

app.use("/public" ,express.static('public'));


app.get('/',(req,res)=>{
    res.send('<h1>Hello World!</h1>')
})
//error route
app.get('/error', (req, res, next) => {
    // This will trigger your error handler
    next(new Error("This is a test error"));
    
    // Alternatively:
    // throw new Error("This will also be caught");
});
//for error handling
//error handlers are come after the routes
app.use((err ,req ,res ,next)=>{
    console.error(err.stack);
    res.status(500).send("something went wrong");
})



app.listen(8080);