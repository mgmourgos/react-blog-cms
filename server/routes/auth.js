var express = require('express')
var router = express.Router()
var passport = require('passport');
const mongoose = require('mongoose'),
      User = require('../db.js').User

//user registration
router.post('/register', function(req, res) {
  User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
    if (err) {
        res.send({
            status: err.name,
            message: err.message
        })
    } else {
        passport.authenticate('local')(req, res, function () {
            res.send({
                name: 'registrationSuccess',
                username: req.user.username
            })
        })
    }
  })
})

//check if logged in, if so returns username and status
router.get('/login', function(req, res) {
    if(req.isAuthenticated()) {
        res.send({
            status: 'logged in',
            username: req.user.username
        })
    } else {
        res.send({
            status: 'not logged in'
        })
    }
})

//body of request contains username and passowrd, if success return username and status
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.send({
        status: 'logged in',
        username: req.user.username
    })
})

//logs out if client was logged in
router.get('/logout', function(req, res) {
    req.logout()
    req.session.destroy()//removes session upon logout
    res.send({status: 'logged out'})
})

module.exports = router
