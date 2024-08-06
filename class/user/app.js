const express = require('express');
const userModel = require('./userModel')
const app=express();


app.get('/',(req,res)=>{
    res.send("hello")
})


app.get('/create', async (req, res)=>{
    let userCreated = await userModel.create({
        name:"fling",
        email:"fling@abc.com",
        age:25
    })
    res.send(userCreated)
})

app.get('/read', async(req,res)=>{
    let usersFind = await userModel.find()
    res.send(usersFind)
})

app.get('/update', async (req,res)=>{
    let userUpdated=await userModel.findOneAndUpdate({name: "fling"},{age: 29}, {new:true})
    res.send(userUpdated)
})

app.get('/delete', async(req,res)=>{
    let userDeleted = await userModel.findOneAndDelete({name: "Sam"})
    res.send(userDeleted)
})

app.listen(3000, ()=>{
    console.log("listening on 3000")
})