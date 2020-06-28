const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config')

//Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//Connect to DB
mongoose.connect(
process.env.DB_CONNECTION,
{ useNewUrlParser: true }, 
() => console.log('connected to DB!')
);

app.listen('3000');
