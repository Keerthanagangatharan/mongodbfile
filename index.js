const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyparser=require("body-parser");
mongoose.connect("mongodb+srv://1:1@cluster0.d8mc4bv.mongodb.net/data",{}).then((con)=>{
    console.log("db connected");
})
app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine',"ejs");

app.use('/',require('./server/routes/route'));

app.listen(10000,console.log("connected"))
