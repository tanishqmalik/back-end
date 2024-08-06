const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path')

const Port=3000

app.listen(Port, ()=>{
    console.log(`listening at port ${Port}`)
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');


app.get('/', (req,res)=>{
    fs.readdir('./files', (err,files)=>{
        res.render('Landing',{files:files})
    })
})


app.post('/create', (req,res)=>{
    fs.writeFile(`./files/${req.body.title}.txt`, req.body.details, (err)=>{
        res.redirect('/')
    })
})

app.get('/viewdata/:filename', (req,res)=>{
    fs.readFile(`./files/${req.params.filename}`, (err,filedata)=>{
        res.render('filedata', {filename:req.params.filename, filedata});
    })
})

app.post('/editTitle',(req, res)=>{
    fs.rename(`./files/${req.params.filename}`, `./files/${req.params.new}`, (err)=>{
        res.redirect('/')
    })
})


app.get('/editTitle')