const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        fs.readFile('./public/index.html', 'utf-8', function(err,data){
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data);
        })
    }
})

server.listen(3000, ()=> console.log('server listening at port 3000'))