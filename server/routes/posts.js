var express = require('express')
var router = express.Router()
const uuid = require('uuid')
const mongoose = require('mongoose'),
      models = require('../db.js')
//Routes for '/api/'

router.post('/posts', function (req, res) {
    var newPost = new models.Post({
        id: uuid.v4(),
        title: req.body.title,
        content: req.body.content
    })

    newPost.save(function (err, newPost) {
        if (err) return console.error(err)
        res.send('Posted Blog Post: ' + req.body.title)
    })
})

router.get('/posts', function (req, res) {

    models.Post.find({}, {'title': 1, 'content':1, 'id': 1, '_id':0},function (err, allPosts) {
        if (err) return console.error(err)
        res.send(allPosts)
    })
})

router.delete('/posts/:id', function (req, res) {

    models.Post.find({id: req.params.id}).remove(function (err, obj) {
        if (err) return console.error(err)
        else {
            if (obj.result.n === 0) {
                res.send('id not found')
            } else {
                res.send('post deleted')
            }
        }
    })
})

router.put('/posts/:id', function (req, res) {

    models.Post.update({id: req.params.id},    //condition
                {title: req.body.title,
                 content: req.body.content},//info updated
                function (err, obj) {
        if (err) return console.error(err)
        else {
            if (obj.n === 0) {
                res.send('id not found')
            } else {
                res.send('post updated')
            }
        }
    })
})

module.exports = router
