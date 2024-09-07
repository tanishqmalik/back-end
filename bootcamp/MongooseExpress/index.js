const express = require('express')
const app = express();
const path = require('path')

const mongoose = require('mongoose');

const Product = require('./models/Product');
const exp = require('constants');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')

.then(()=>{
    console.log("connection open !!!")
})
.catch(err=>{
    console.log("oh no error")
    console.log(err)
})


const port = 4000


const categories = ['fruit', 'vegetable','dairy']


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}));

// app.use((req,res,next)=>{
//     const {password} = req.query
//     if(password ==="sulabh"){
//         next();
//     }
//     else{
//         res.send('Sorry you need a password')
//     }
    
// })


const verifyPassword = (req,res,next) =>{
    const {password} = req.query
    if(password==='sulabh'){
        next();
    }
    else{
        res.send('sorry you need a password')
    }
}



app.get('/products', async (req,res)=>{
    const products = await Product.find({})
    // console.log(products)
    res.render('products/index', {products});
})


app.get('/products/new', (req,res)=>{
    res.render('products/new')
})

app.post('/products', async (req,res)=>{
     await Product.create(
        {name:req.body.name,
        price:req.body.price,
    category:req.body.category}
    )
    // createProduct();
    res.redirect('products')
    // console.log(req.body)
    // res.send("making your product")
})

app.get('/products/update/:id', verifyPassword,async (req, res)=>{
    const id = req.params.id
    const foundProduct = await Product.findById(id)
    // const updateProduct
    // res.send("okkkayy")
    res.render('products/updateProduct', {foundProduct, categories})
})

app.get('/products/:id',async (req,res)=>{
    const id = req.params.id;
    const findProduct = await Product.findById(id);
    // console.log(findProduct.price)
    res.render('products/show', {findProduct})
    // res.send('details page')
})

app.post('/products/:id', async (req,res)=>{
    const id = req.params.id
    const updatedProduct = await Product.findByIdAndUpdate(id,{name:req.body.name,
        price:req.body.price,
        category:req.body.category});
    // res.redirect(`products/${id}`)
    // res.send("posted")
    console.log(req.body)
    res.redirect(`${id}`)
})

app.get('/products/delete/:id', async (req,res)=>{
    const id = req.params.id;
    await Product.deleteOne({ _id: id});
    res.render('Products/delete')
})

app.use((req,res)=>{
    res.status(404).send("Not found")
})

app.listen(port, ()=>{
    console.log("listening at 3000")
})