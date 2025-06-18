const mysql = require('mysql2/promise');
const express = require('express');

const app =express();

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Anil@1234',
    databasse:'college',
    connectionLimit:10,
    waitForConnections:true,
    multipleStatements:true
});
pool.getConnection()
  .then(conn => {
    console.log('Connected to MySQL database');
    conn.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });


app.get('/',async(req ,res ,next)=>{
    try{
        const[rows] = await pool.query('USE college ;SELECT * FROM college.student');
        res.json(rows);
    }
    catch(err){
        next(err);
    }
});
app.listen(8080 , 
    (res ,req) => console.log('server running')
);