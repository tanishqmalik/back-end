const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(()=>{
    console.log("Connection open!!")
})
.catch(err=>{
    console.log("error", err);
})

const personSchema = new mongoose.Schema({
    first:String,
    last: String
})

personSchema.virtual('fullname').get(function(){
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function(){
    this.first = 'yo'
    this.last = 'mama'
    console.log("About to save!!!")
})

personSchema.post('save', async function(){
    console.log("just saved!!!")
})

const Person = mongoose.model('Person', personSchema)