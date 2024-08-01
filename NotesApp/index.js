const express = require('express')
const app = express();
const fs = require('fs');

const Port=3000

app.listen(Port, ()=>{
    console.log(`listening at port ${Port}`)
})

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    fs.readdir('./files', (err,files)=>{
        res.render('Landing',{files:files})
    })
})

app.get('/create')