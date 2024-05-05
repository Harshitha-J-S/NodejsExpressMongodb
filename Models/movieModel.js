const mongoose = require('mongoose')  // after env only mongoose must be there

const movieSchema = new mongoose.Schema({
    name : {
        type : String,
        required:[true,'Name is required!'],
        unique:true,
        trim : true
    },
    description: {
        type : String,
        required: [true, 'description is required'],
        trim : true
    },
    duration: {
        type : Number,
        required:[true,'Duration is required!'],
    },
    rating: {
        type : Number
    },
    totalRating: {
        type: Number
    },
    releaseYear: {
        type: Number,
        required: [true, 'Release year is required field!']
    },
    releaseDate:{
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    genres: {
        type: [String],
        required: [true, 'Genres is required field!']
    },
    directors: {
        type: [String],
        required: [true, 'Directors is required field!']
    },
    coverImage:{
        type: String,
        require: [true, 'Cover image is required field!']
    },
    actors: {
        type: [String],
        require: [true, 'actors is required field!']
    },
    price: {
        type: Number,
        require: [true, 'Price is required field!']
    }
})
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;