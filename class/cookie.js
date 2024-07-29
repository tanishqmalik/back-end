const express = require('express')
const cookieParser = require('cookie-parser')  //3rd-party

const app = express()

app.use(cookieParser())

app.get('/setcookie', (req,res)=>{
    res.cookie('Token name','Encrypted cookie string value',{
        maxAge:60000,
        secure:true,
        httpOnly:true,
        sameSite: 'strict'
    })
    res.send('cookie have been saved')
})

app.get('/getcookie', (req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})

app.get('/deletecookie', (req,res)=>{
    res.clearCookie('Token name');
    res.send('cookie deleted')
})

app.listen(3000, ()=>{
    console.log("server listening at port 3000")
})
