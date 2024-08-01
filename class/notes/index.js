// import packages

const express = require('express')  
const app = express();
const path = require('path')
const fs = require('fs')  //readfile

// parser for form 
app.use(express.json())  // built-in middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))


// settings ejs view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// app.get('/', (req, res)=>{
//     res.render("index.ejs")
// })

// app.get('/about', (req, res)=>{
//     res.render("about.ejs")
// })

// app.get('/contact', (req, res)=>{
//     res.render("contact.ejs")
// })

// app.get('/gallery', (req, res)=>{
//     res.render("gallery.ejs")
// })

// // dynamic routes
// app.get('/user/:username/:age', (req,res)=>{
//     res.send(`Welcome ${req.params.username} of age ${req.params.age}`)
// })

//routes
app.get('/' ,function(req,res){
    fs.readdir('./files', (err,files)=>{
        // console.log(files)
        res.render('index.ejs', {files:files});
    })
})


app.listen(3000, ()=>{
    console.log("listening at 3000")
})

app.post('/create', (req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err)=>{
        res.redirect('/')
    })
})

app.get('/files/:filename', (req, res,next)=>{
    // res.send(`${req.params.filename}`);
    // res.render('detail')
    fs.readFile(`./files/${req.params.filename}`, "utf-8", (err,filedata)=>{
        // const {filename,data} = req.params
        res.render('detail.ejs', {filename:req.params.filename, filedata})
    })
    // next();
})

app.get('/edit/:filename', (req,res)=>{
    res.render('edit.ejs',{filename: req.params.filename});
})

app.post('/edit',(req,res)=>{
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new.split(' ').join('')}.txt`,(err)=>{
        res.redirect('/')
    })
})

// app.post('/editdetails',(req,res)=>{
//     fs.writeFile
// })

app.get('/editdetails/:filename/:filedata', (req,res)=>{
    res.render('editdetails.ejs',{
        filename: req.params.filename,
        filedata: res.params.filedata
    })
})

app.delete('/files/:filename', (req,res)=>{
    
    res.redirect('/')
})


