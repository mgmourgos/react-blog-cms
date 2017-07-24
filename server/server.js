const express = require('express'),
      path = require('path')
// const fs = require('fs');

//loads MONGOLAB_URI into process.env read from file .env
require('dotenv').config()

app = express()

var todoApi = require('./routes')
var bodyParser = require('body-parser')

var mongoose = require('mongoose')
mongoose.connect(process.env.MONGOLAB_URI)
mongoose.connection.on('error', () => {
	console.error('MongoDB Connection Error. Please make sure that MongoDB is running.')
	process.exit(1)
})



const sendHTMLpage = (req, res) => {

    bundle = ``
    if (process.env.NODE_ENV == 'development') {
        //bundle = `<script src="http://192.168.1.5:8080/assets/bundle.js"></script>`
        bundle = `<script src="http://localhost:8080/assets/bundle.js"></script>`
    } else {
        bundle = `<script src="assets/bundle.js"></script>`
    }

    return_html = `
<!DOCTYPE html>
<html>
    <head>
        <title>Served</title>
    </head>
    <body>
        <div id="react-container"></div>
        ` + bundle + `
    </body>
</html>`

    res.status(200).send(return_html)

  }

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger)
app.use('/api', todoApi)

// var filepath = path.join(__dirname, 'song.wav')
//
// app.get('/music', function(req, res){
//     res.set({'Content-Type': 'audio/mpeg'});
//     var readStream = fs.createReadStream(filepath);
//     readStream.pipe(res);
// })

app.get('/*', (req, res) => {
    sendHTMLpage(req, res);
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port ' + (process.env.PORT || 3000))
})

module.exports = app
