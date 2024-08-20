// how to halndle the multipe requenst with get and post method
const express = require('express')
const app = express();


// app.get('/hello', (req, res)=>{
//     res.send("this is chitkara")
// })

// app.post('/hello', (req, res)=>{
//     res.send("you just called the post method at /hello ")
// })

// app.get('/things/:name/:id', (req,res)=>{
//     res.send('id' + req.params.id + "and name" + req.params.name)
// })

// app.use((req,res,next)=>{
//     console.log("A new request received at" + Date.now())
//     next();
// })

// app.use( '/things' , (res, req, next)=>{
//     console.log("A new request received")
//     next();
// })

// app.get('/things', (req, res)=>{
//     res.send("things");
// });




app.listen(3000, ()=>{
    console.log("server is lisenting at 3000")
})




// using middleware different calls will be handled by route handler in order to process the function or client server
// interaction 

// in ordrer to get parameters for a required input then ... req.params is used 


