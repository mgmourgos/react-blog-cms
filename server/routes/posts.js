var express = require('express')
var router = express.Router()
const uuid = require('uuid')
const mongoose = require('mongoose'),
      models = require('../db.js')
//Routes for '/api/'

//call for adding a new post (requires authentication)
router.post('/posts', function (req, res) {
    if(req.isAuthenticated()) {
        if (!req.body.title || !req.body.content || req.body.title == "" || req.body.content == "") {
            // res.send({error: 'Both title and content required for post' } )
            res.send({error : 'Inavlid title or content'})
            return
        }
        var newPost = new models.Post({
            id: uuid.v4(),
            title: req.body.title,
            content: req.body.content,
            date: new Date(),
            author: req.user.username
        })

        newPost.save(function (err, newPost) {
            if (err) {
                res.send({error: 'error creating post'})
                return console.error(err)
            } else {
                res.send({status: 'Post successful'})
                return
            }
        })
    } else {
        res.send({error: 'unauthorized'})
    }
})

//call for getting a list of existing posts
router.get('/posts', function (req, res) {

    models.Post.find({}, {//inluded fields denoted by 1
            'title':    1,
            'content':  1,
            'author':   1,
            'date':     1,
            'id':       1,
            '_id':      0
        },function (err, allPosts) {

        allPosts.sort(function(a,b){
            return new Date(b.date) - new Date(a.date)
        });

        if (err) return console.error(err)
        res.send(allPosts)
    })
})

//call for deleting a post (requires authentication)
router.delete('/posts/:id', function (req, res) {
    if(req.isAuthenticated()) {
        models.Post.find({id: req.params.id}).remove(function (err, obj) {
            if (err) return console.error(err)
            else {
                if (obj.result.n === 0) {
                    res.send({error: 'invalid post id'})
                } else {
                    res.send({status: 'post deleted'})
                }
            }
        })
    } else {
        res.send({error: 'unauthorized'})
    }
})

//call for updading a post (requires authentication)
router.put('/posts/:id', function (req, res) {
    if(req.isAuthenticated()) {
        models.Post.update({id: req.params.id},    //condition
                    {title: req.body.title,
                     content: req.body.content},//info updated
                    function (err, obj) {
            if (err) return console.error(err)
            else {
                if (obj.n === 0) {
                    res.send({error: 'invalid post id'})
                } else {
                    res.send({status: 'post updated'})
                }
            }
        })
    } else {
        res.send({error: 'unauthorized'})
    }
})

module.exports = router
