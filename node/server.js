 const express = require('express');
 const mongoose = require('mongoose')
 const cors = require('cors')
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
require('dotenv').config();
const app = express();


//Db connection
mongoose.connect(process.env.DATABASE_CONNECTION,{
   useNewUrlParser: true, 
})
.then(()=>{
   console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log(err)
  })
 


app.use(cors())
app.use(morgan('dev'));

 //routes middleware
 app.use('/api',authRoutes)

 app.listen(8080,()=>{
    console.log("server is running on port 8080")
 })

 
 