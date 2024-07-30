const express = require('express')
const app = express();
port=3000

const path= require('path')
const {v4: uuidv4} = require('uuid');

const methodOverride = require('method-override')



const comments= [
    {
        id:uuidv4(),
        username:"tanishq",
        Comment: "hello brother",
    },
    {
        id:uuidv4(),
        username:"soubhagya",
        Comment: "hello",
    },
    {
        id:uuidv4(),
        username:"garg",
        Comment: "merree bacheeee",
    },
    {
        id:uuidv4(),
        username:"shiven",
        Comment: "ode utte dekh, utte kon? utte mein",
    },
]

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

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
    comments.push({username, Comment, id:uuidv4()})
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const comment =  comments.find(c=>
        c.id ===id
    );
    res.render('comments/show.ejs',{comments:comment })
    // console.log(comment)
})

app.patch('/comments/:id', (req,res,next)=>{   //updated comment text through postman
    const {id}= req.params;
    const newCommentText= req.body.comment;
    const foundComment=comments.find(c=> c.id===id);
    foundComment.Comment=newCommentText;
    res.redirect('/comments')
    next();
})

app.get('/comments/:id/edit', (req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c=>c.id===id);
    res.render('comments/edit.ejs', {comments:comment})
})