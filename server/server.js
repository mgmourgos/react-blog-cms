const express = require('express'),
      path = require('path')
//loads MONGOLAB_URI into process.env read from file .env
require('dotenv').config()
app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var postApi = require('./routes/posts')
var userApi = require('./routes/users')
var authApi = require('./routes/auth')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session')
var User = require('./db').User

mongoose.connect(process.env.MONGOLAB_URI)
mongoose.connection.on('error', () => {
	console.error('MongoDB Connection Error. Please make sure that MongoDB is running.')
	process.exit(1)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/assets', express.static(path.join(__dirname, '../build')))
app.use(morgan('tiny'))

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api', postApi)
app.use('/api', userApi)
app.use('/api', authApi)

const sendHTMLpage = require('./index')
app.get('/*', (req, res) => {
    sendHTMLpage(req, res)
})

app.listen(process.env.PORT || 3001, function () {
    console.log('Example app listening on port ' + (process.env.PORT || 3001))
})

module.exports = app
