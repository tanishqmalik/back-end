const express = require('express')
const app = express();

app.get('/tacos', (req, res)=>{
    res.send("get /tacos respnse")
})

app.post('/tacos', (req,res)=>{
    const {name, qty} = req.body;
    res.send(`here are your ${qty} ${name}`)
    res.send('hello')
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})