const http = require('http')
const fs = require('fs')

//import file
const homepage = fs.readFileSync('./class/public/index.html')
const homeStyle = fs.readFileSync('./class/public/style.css')

const server = http.createServer((req, res)=>{
    // res.end("hello world")
    if(req.url==='/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`${homepage}`)
        res.end('this is a homepage')
    }

    else if(req.url.match("\.css$")){
        const cssPath = path.join(__dirname, 'public',);
    }
    else if(req.url === '/about'){
        res.end("this is about page")
    }
    else if(req.url === '/contact'){
        res.end("this is contact page")
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write("page not found");
        res.end();
    }
})

server.listen(3000, ()=>{
    console.log("listening at port 3000")
})