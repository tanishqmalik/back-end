// const express = require("express");
// const app=  express()

// // console.dir(app)
// const Port = 3000

// app.use((res,req,next)=>{
//     console.log("we got a new request")
//     next();
// })


// app.listen(Port, ()=>{
//     console.log(`Your app is running: ${Port}`)
// })


// app.get("/", (req, res)=>{
//     res.send("hello bhai")
// })

// app.get("/home", (req, res)=>{
//     res.send("hello bhai, home mein aagye aap")
// })


const express = require("express")
const app = express();
// console.dir(app)

app.listen(3000, ()=>{
    console.log("listening on port 3000 !")
})

// app.use((req, res)=>{
//     console.log("we got a new request")
//     // console.dir(req)
//     res.send(`<h1>hello, we got your request</h1>`)
//     // res.send({color: 'red'})
// })

app.get('/r/:subreddit/:postID', (req, res)=>{
    // res.send("this is a subreddit")
    const {subreddit,postID} = req.params

    res.send(`<h1>Browsing the ${subreddit} subreddit, and postId : ${postID}</h1>`)
})


app.get('/cats', (req,res)=>{
    console.log("cat resquest")
    res.send("meow");
})

app.get('/dogs', (req,res)=>{
    console.log("dog request")
    res.send("woof")
})

app.get('/', (req,res)=>{
    console.log("home page req")
    res.send("this is the page")
})


app.post('/cats', (req,res)=>{
    res.send('Post request to cats...')
})


app.get('/search', (req,res)=>{
    const { q,color }= req.query;
    res.send(`<h1>${q} and ${color}</h1>`);
})

app.get('*', (req,res)=>{
    // console.log(req.query)
    res.send('i dont know the path')
})



// /cats => 'meow'
// dogs => 'woof'
// '/' 