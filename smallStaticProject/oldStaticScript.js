const http = require('http')
const fs = require('fs')

const path = require('path');
const { type } = require('os');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./public/index.html', 'utf-8', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/html' })
        })
    } else if (req.url.match("\.css$")) {
        const cssPath = path.join(__dirname, 'public', req.url)
        const fileStream = fs.createReadStream(cssPath, 'utf-8')
        res.writeHead(200, { 'content-type': 'text/css' })
        fileStream.pipe(res)
    } else if (req.url.match("\.png$")) {
        const imagePath = path.join(__dirname, 'public', req.url)
        const fileStream = fs.createReadStream(imagePath)
        res.writeHead(200, { 'content-type': 'image/png' })
        fileStream.pipe(res)
        res.end()
    }
})


server.listen(3000, (req, res) => {
    console.log("listening on 3000")
})