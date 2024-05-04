const mongoose = require('mongoose')  // after env only mongoose must be there

const movieSchema = new mongoose.Schema({
    name : {
        type : String,
        required:[true,'Name is required!'],
        unique:true
    },
    description:String,
    duration: {
        type : Number,
        required:[true,'Duration is required!'],
    },
    ratings: {
        type : Number,
        default : 1.0
    },
})
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;