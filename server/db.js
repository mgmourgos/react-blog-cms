var mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    id: String,
    title: String,
    author: String,
    content: String
})

const Post = mongoose.model('Post', postSchema)

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('User', userSchema)

module.exports = {
    Post: Post,
    User: User
}
