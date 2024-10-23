const express = require("express");
require('dotenv').config();
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const port = process.env.PORT||3500;








mongoose.connect(process.env.MONGODB_CONNECTION).then(()=>{console.log("Database Connected")}).catch((err)=>{console.log(err)});

// middle ware
app.set('view engine', 'ejs');
app.use (express.static(path.join(__dirname, "assets")));//host  express static files

// const app = express();
// app.use(express.static(__dirname))


app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/aboutus',(req,res)=>{
    res.render('aboutus')
});

app.get('/contact',(req,res)=>{
    res.render('contact')
});

app.get('/signup',(req,res)=>{
    res.render('signup')
});

app.get('/login',(req,res)=>{
    res.render('login')
});

app.get('/dashboard',(req,res)=>{
    res.render('dashboard')
});


app.listen(port,()=>{

    console.log(`Server up and running at http://localhost:${port}/`);
});