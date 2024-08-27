const express = require('express')
const app = express();
const path = require('path')

const mongoose = require('mongoose');

const Product = require('./models/Product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')

.then(()=>{
    console.log("connection open !!!")
})
.catch(err=>{
    console.log("oh no error")
    console.log(err)
})


const port = 3000


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/products', async (req,res)=>{
    const products = await Product.find({})
    console.log(products)
    res.render('products/index', {products});
})

app.get('/products/:id',async (req,res)=>{
    const id = req.params.id;
    const findProduct = await Product.findById(id);
    console.log(findProduct.price)
    res.render('products/show', {findProduct})
    // res.send('details page')
})

app.listen(port, ()=>{
    console.log("listening at 3000")
})