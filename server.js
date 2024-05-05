const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const mongoose = require('mongoose')

// npm start will run it
const app = require('./app');

console.log(process.env)

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser : true
}).then((conn) => {
     console.log(conn)
     console.log('DB connection Successfull')
}).catch((error) => {
    console.log('Some error has occured');
});



// // creating a documnet using model - Movie
// const testMovie = new Movie ({
//     name : "chandan",
//     description:"i don't care",
//     duration:143,
//     rating: 100
// })

// testMovie.save()
// .then(doc => {
//     console.log(doc);
// })
// .catch(err => {
//     console.log("error occured : " + err)
// })

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log('server started');
})


// //SET X=100 on terminal will create a environment variable