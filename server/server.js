const express = require('express'),
      path = require('path')

//loads MONGOLAB_URI into process.env read from file .env
require('dotenv').config()

app = express()

var postApi = require('./routes')
var bodyParser = require('body-parser')

var mongoose = require('mongoose')
mongoose.connect(process.env.MONGOLAB_URI)
mongoose.connection.on('error', () => {
	console.error('MongoDB Connection Error. Please make sure that MongoDB is running.')
	process.exit(1)
})

const sendHTMLpage = require('./index')

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

app.use('/assets', express.static(path.join(__dirname, '../build')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger)
app.use('/api', postApi)

const finishCall = (res) => {
    res.send('received register api call')
}

//Placeholder for future registation api call
app.post('/register', (req, res) => {
    console.log(req.body)
    setTimeout( () => finishCall(res), 3000)

})

app.get('/*', (req, res) => {
    sendHTMLpage(req, res)
})

app.listen(process.env.PORT || 3001, function () {
    console.log('Example app listening on port ' + (process.env.PORT || 3001))
})

module.exports = app
