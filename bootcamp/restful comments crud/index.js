const express = require('express')
const app = express();
port=3000

const path= require('path')


const comments= [
    {
        id:1,
        username:"tanishq",
        Comment: "hello brother",
    },
    {
        id:2,
        username:"soubhagya",
        Comment: "hello",
    },
    {
        id:3,
        username:"garg",
        Comment: "merree bacheeee",
    },
    {
        id:4,
        username:"shiven",
        Comment: "ode utte dekh, utte kon? utte mein",
    },
]

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res)=>{
    res.render("LandingHTML.ejs")
})

app.use((req, res, next)=>{
    console.log("u hit a request")
    next();
})

// app.use(express.urlencoded({extended:true}))
app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})


// reading the comments
app.get('/comments', (req,res)=>{
    res.render('comments/index.ejs', {comments})
})

// new comments create
app.get('/comments/new', (req,res)=>{
    res.render('comments/new.ejs')
})

app.post('/comments' , (req, res)=>{
    console.log(req.body)
    const {username, Comment}= req.body
    // res.send(`your comment is added.. to confirm click on this button -> <a href="http://localhost:3000/comments">see comments</a>`)
    comments.push({username, Comment})
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const comment =  comments.find((c)=>{
        c.id === parseInt(id)
    });
    res.render('comments/show.ejs',{comments:comment })
    // console.log(comment)
})