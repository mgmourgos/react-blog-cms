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

module.exports = sendHTMLpage
