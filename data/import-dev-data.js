const mongoose = require('mongoose') 
const dotenv = require('dotenv')
const fs = require('fs')
const Movie = require('./../Models/movieModel')

dotenv.config({path: './config.env'})

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser : true
}).then((conn) => {
     console.log(conn)
     console.log('DB connection Successfull')
}).catch((error) => {
    console.log('Some error has occured');
});

const movies = JSON.parse(fs.readFileSync('./data/movies.json','utf-8'))

//DELETE EXISTING MOVIE DOCUMENT IN COMPASS
const deleteMovies = async () => {
    try{
        await Movie.deleteMany();
        console.log('data succesfully deleted');
    }
    catch(err) {
        console.log(err.message);
    }
    process.exit()
}

//IMPORT MOVIES FROM MOVIES.JSON TO MONGODB
const importMovies = async () => {
    try{
        await Movie.create(movies);
        console.log('data succesfully imported');
    }
    catch(err) {
        console.log(err.message);
    }
    process.exit() // to go to next prompt in console
}
// console.log(process.argv)  // can extract the option which we pass while running imprt-dev-data script
// // will console 3 elemets in array- 2 index will have options
if(process.argv[2] === '--import') {
    importMovies();
}
if(process.argv[2] === '--delete') {
    deleteMovies();
}
