const Product = require('./models/Product')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')

.then(()=>{
    console.log("connection open !!!")
})
.catch(err=>{
    console.log("oh no error")
    console.log(err)
})

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category:'fruit'
// })

// p.save()
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

const seedProducts = [
    {
    name: 'banana',
    price:2.99,
    category:'fruit'
    },
    {
        name: 'organic goddess melon',
        price: 4.99,
        category:'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
        },
        {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
        },
        {
        name: 'chits kind of annoying to do this',
        price: 2.69,
        category: 'dairy'
        }

]

Product.insertMany(seedProducts);