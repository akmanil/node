const express = require('express');

const app = express();

const port = 8080

const userRoute = require('./twoRouter');
app.use('/',userRoute);

app.listen(port , ()=>{
  console.log(`Server is running at http://localhost:${port}`);
})