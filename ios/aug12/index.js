const express = require('express')
// const http = require('http')
const app = express();


// app.post('/', (req, res)=>{
//     res.send("this is chitkara")
// })


// app.get('/about', (req, res)=>{
//     res.send("this is about page of chitkara")
// })

// app.get('/login', (req, res)=>{
//     res.send("this is login page of chitkara")
// })

app.listen(3000, ()=>{
    console.log("server is lisenting at 3000")
})

app.get('/things/:name/:id', (req,res)=>{
    res.send('id' + req.params.id + "and name" + req.params.name)
})

// in ordrer to get parameters for a required input then ... req.params is used 

// how to halndle the multipe requenst with get and post method
