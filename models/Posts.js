const mongoose = require('mongoose');

const PostsSchema = mongoose.Schema({
    title: String,
    description: String,
    date: Date.now
})