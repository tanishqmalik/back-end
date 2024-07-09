const express = require("express");
const app=  express()

// console.dir(app)
const Port = 3000

app.use((res,req,next)=>{
    console.log("we got a new request")
    next();
})


app.listen(Port, ()=>{
    console.log(`Your app is running: ${Port}`)
})


app.get("/", (req, res)=>{
    res.send("hello bhai")
})

app.get("/home", (req, res)=>{
    res.send("hello bhai, home mein aagye aap")
})