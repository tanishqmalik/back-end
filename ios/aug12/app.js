const express = require('express')
// const http = require('http')
const app = express();
const path = require('path')

app.use(express.static('public')); 



app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'Register.html'));
})

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.post('/login', (req,res)=>{
    
})


app.listen(3000, ()=>{
    console.log("server is lisenting at 3000")
})