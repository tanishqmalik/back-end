const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(()=>{
    console.log("connection open !!!!")
})
.catch(err=>{
    console.log("oh noo error")
    console.log(err)
})


// {
//     title: 'Amadeus',
//     year: 1986,
//     score: 9.2,
//     rating: 'R'
// }

// const movieSchema = new mongoose.Schema({
//     title: String,
//     year: Number,
//     score: Number,
//     rating: String
// })

// const Movie = mongoose.model('Movie', movieSchema)
// const Amadeus = new Movie({
//     title: 'Amadeus',
//     year:'1986',
//     score: 9.2,
//     rating:'R'
// })

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score: Number,
    rating:String
})

const Movie = mongoose.model('Movie', movieSchema)

const Amadeus= new Movie({
    title:'Amadeus',
    year:'1986',
    score:9.2,
    rating:'R'
})

Movie.insertMany([
    {
        title:'khkn',
        year:'1993',
        score:9.2,
        rating:'Best'
    },
    {
        title:'i know u',
        year:'1221',
        score:9.1,
        rating:'bestest'
    }
])

.then(data=>{
    console.log("IT WORkED")
    console.log(data)
})