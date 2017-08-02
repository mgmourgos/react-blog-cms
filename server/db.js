var mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose')

const postSchema = new mongoose.Schema({
    id: String,
    title: String,
    author: String,
    content: String,
    date: Date
})

const Post = mongoose.model('Post', postSchema)

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema)

module.exports = {
    Post: Post,
    User: User
}
