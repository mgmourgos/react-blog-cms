var mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    id: String,
    title: String,
    author: String,
    content: String
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
