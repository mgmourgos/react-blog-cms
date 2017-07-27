var express = require('express')
var router = express.Router()
const mongoose = require('mongoose'),
      User = require('../db.js').User

//a call for the client to check if {username} is taken or not
router.get('/users/:username', function (req, res) {
    User.findOne({username: req.params.username}, function (err, obj) {
        if (err) return console.error(err)
        if (obj) {
            res.send({errors: {username: "username taken"}})
        } else {
            res.send({ })
        }
    })
})

module.exports = router
