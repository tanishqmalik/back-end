const express = require('express')
const app = express();

app.use(express.static('expressStaticWebsite/public'));    // buit-in middleware

// app.use((req,res)=>{
//     res.status(404);
//     res.send(`<h1>Error 404: Resource not found</h1>`)
// })


//middleware  

// middleware chaining - on eafter another middleware
app.use(function(req,res,next){    //application middleware 
    console.log("middleware 1 running")
    next();
})

app.use('/about',function(req,res,next){     //application middleware 
    console.log("middleware 2 running")
    next();
})


app.use(function(req,res,next){    //application middleware 
    console.log("middleware 3 running")
    next();
})


app.get('/', (req, res)=>{
    res.send("this is home page")
})

app.get('/about', (req, res)=>{
    res.send("this is about section")
})

app.get('/contact', (req, res)=>{
    // res.send("this is con section")
    res.render('public/contact.html')
})


app.get('/profile', (req, res,next)=>{
    return next(new Error('Something went wrong'))
})

app.use((err,req,res,next)=>{
    // console.log(err.stack)
    res.status(500);
    res.send("error 500! internal server error")  // error handler middleware on response
})

app.listen(3000, ()=> {
    console.log("app is listening at 3000")
})

