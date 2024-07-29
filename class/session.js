const express = require('express')
const session = require('express-session')
const app = express();

app.use(session({
    secret:'secret-key',   //Secret key used to sign the session id cookie
    resave: false,        //whether to save the session data if no changes are made  //example:otp
    saveUninitialized: false, //whether to save uninitialized sessions
    cookie: {maxAge: 5000}    //session timout of 5 seconds
}))

app.get('/setSession',(req,res)=>{
    req.session.username='Sam'
    res.send('Session data set')
})

app.get('/getSession', (req, res)=>{
    const username = req.session.username;
    res.send(`username ${username}`)
})

app.get('/destroySession',(req,res)=>{
    req.session.destroy()
    res.send('Session destroyed')
})

app.listen(3000, ()=>{
    console.log("server listening at 3000")
})