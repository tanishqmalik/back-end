const express = require('express');
const path = require('path');
const user = require('./models/user');
// const userModel = require('./userModel')
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/user',(req,res)=>{
    res.render('user')
})

app.post('/create', async (req,res)=>{
    let{name,email,image} = req.body
    let usercreated = await user.create({
        name,
        email,
        image
    })

    res.send(usercreated)
})






// app.get('/create', async (req, res)=>{
//     let userCreated = await userModel.create({
//         name:"fling",
//         email:"fling@abc.com",
//         age:25
//     })
//     res.send(userCreated)
// })

// app.get('/read', async(req,res)=>{
//     let usersFind = await userModel.find()
//     res.send(usersFind)
// })

// app.get('/update', async (req,res)=>{
//     let userUpdated=await userModel.findOneAndUpdate({name: "fling"},{age: 29}, {new:true})
//     res.send(userUpdated)
// })

// app.get('/delete', async(req,res)=>{
//     let userDeleted = await userModel.findOneAndDelete({name: "Sam"})
//     res.send(userDeleted)
// })

app.listen(3000, ()=>{
    console.log("listening on 3000")
})