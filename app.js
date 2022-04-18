const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB server
dotenv.config();
mongoose.connect(process.env.DB_SERVER)
.then(() => console.log('Connected to DB server...'))
.catch((err) => console.log(err));


// SERVER RUNNING
const port = process.env.PORT || 3000;
const hostname = 'localhost';

app.listen(port, hostname, (err) => {
  if (err) {
    return console.log("Something went wrong: " + err);
  } else {
    console.log(`Server running on port ${port}...`)
  }
})

// require Routes
const homeRouter= require ('./routes/homeRoute');
const aboutRouter = require('./routes/aboutRoute')
const contactRouter = require('./routes/contactRoute');
const composeRouter = require('./routes/composeRoute');


// use routes
app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/compose', composeRouter); 






