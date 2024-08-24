// const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
// .then(()=>{
//     console.log("Connection Open")
// })
// .catch(err=>{
//     console.log("oh no error", err)
// })

// const productschema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type:Number
//     }
// })

// const Product = mongoose.model('Product', productschema);

// const bike = new Product({
//     name: 'Mountain Bike',
//     price : 8999,
//     color : 'red'
// })

// bike.save()
// .then((data)=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(()=>{
    console.log("Connection open!!")
})
.catch(err=>{
    console.log("error", err);
})


const productschema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        maxlength: 20
    },
    price:{
        type: Number,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty:{
        online:{
            type: Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productschema.methods.greet = function(){
    console.log(`-from ${this.name}`)
}

productschema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale
    return this.save();
}

productschema.methods.addCategory = function(newCat){
    this.categories.push(newCat);
    return this.save()
}

productschema.statics.fireSale = function(){
    return this.updateMany({}, {onSale: true, price:0})
}

const Product = mongoose.model('Product', productschema);


Product.fireSale()
.then(res=>{
    console.log(res)
})

// const findProduct = async ()=>{
//     const foundProduct = await Product.findOne({name: 'Tire Pump'});
//     // foundProduct.greet();
//     console.log(foundProduct);

//      await foundProduct.toggleOnSale();
//     console.log(foundProduct)

//     await foundProduct.addCategory('Racing');
// }



// findProduct();
// const bike = new Product(
//     {
//         name: 'Tire Pump',
//         price: 19.5,
//         categories: ['cycling', 'biking']
//     }
// )
// bike.save()
// .then(data=>{
//     console.log("It worked");
//     console.log(data);
// })
// .catch(err=>{
//     console.log("oh no error",err)
// })

// Product.findOneAndUpdate({name:'Tire Pump'}, {price: -100},{new:true, runValidators: true})
// .then(data=>{
//     console.log("It worked");
//     console.log(data);
// })
// .catch(err=>{
//     console.log("oh no error",err)
// })