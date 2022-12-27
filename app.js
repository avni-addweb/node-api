require('dotenv').config;
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));


mongoose.connect("mongodb+srv://test-project:test-project@test.r0doq9t.mongodb.net/test-data?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})
.then(()=>console.log("Connected to the database"))
.catch((err)=>console.log(err))

//route prefix
app.use('/api/post',require('./routes/routes'))

app.listen(port, (error) => {
    if (error) return console.log(error);
    console.log("server running on port" + port);
  });
  

