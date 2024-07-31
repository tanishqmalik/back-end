const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shop')
.then(()=>{
    console.log("Connected !!")
})
.catch(()=>{
    console.log("oh on error!!!!")
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type: Number
    }
}) 

const Product= mongoose.model('Product', productSchema )

const bike = new Product({
    name: 'Mountain Bike',
    price:599
})
bike.save()
.then(data=>{
    console.log("it worked !")
    console.log(data);
})
.catch(err=>{
    console.log("oh no error")
    console.log(err.errors.name.properties.message)
})