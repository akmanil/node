// using the express third party middleware using express 

const express = require('express');

const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.get("/" , (req ,res) => {
    res.send("Hello World ");
});

app.listen(8080);