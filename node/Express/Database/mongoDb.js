const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/Mydbs',{useNewUrlParser:true ,useUnifiedTopology:true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name :String,
    age :Number,
    email : {type:String ,unique :true}
});

const User = mongoose.model('User' , userSchema);
app.get('/user' , async (req ,res ,next) =>{
    try{
         const count = await User.countDocuments();
        console.log(`Total users: ${count}`);
        const users = await User.find({});
        res.json(users);
    }
    catch(err){
        next(err);
    }
} )

app.listen(8080);