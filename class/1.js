// node is javascript runtime env.
// js didn't have the functionalities which is needed to create backend.
// created in 2009 using google chrome v8 engine (c++) by ryan dhal
// nodeJs = js  wrapper + v8 engine

// npm is used to manage packages and dependencies for nodejs projects, making easier to install and update libraries and frameworks

// modules - things installed in nodeJs core 
// packages - things installed via npm 


// dependencies:- project packages and their dependencies
// dev-dep :- those packages that are needed while development stage but they are no use after deployment


// script
// default script - start, test
// custom script 

// console.log("hello world")


// const http = require('http')

// const server = http.createServer(function(req,res){
//     res.end("hello world")
// })

// server.listen(3000)


// const http = require('http')

// const server = http.createServer(function(req, res){
//     res.end("hello world")
// })
// server.listen(3000)

// built-in modules - installed in nodejs core
// local modules - creates locally by dev
const hello3 = require('./abc.js')
hello3.myfun1()
hello3.myfun2()
// third-party modules - installed via npm

// build-in modules

// os - provides info about the os
// path - provides utility functions for working with file path
// fs - file system operation
// http - create http server