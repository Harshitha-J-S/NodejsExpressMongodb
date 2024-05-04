const Movie = require('./../Models/movieModel')


exports.getAllMovies = async(req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({
            status:"success",
            length:movies.length,
            data : {
                movies
            }
        })
    }
    catch(err){
          res.status(404).json({
            status : 'fail',
            message : err.message
          })
    }
}
exports.getMovie = async(req, res) => {
    try {
        // const movie = await Movie.find({_id:req.params.id})
        const movie = await Movie.findById(req.params.id)

        res.status(200).json ({
            status:"success",
            data : {
                movie
            }
        })
    }
    catch(err){
        res.status(404).json({
          status : 'fail',
          message : err.message
        })
  }


}

exports.createMovie = async(req, res) => { // async must be used when we use try catch
    // ONE WAY
    //  const testMovie = new Movie({})  // {}will have object,it is created from model Movie
    //  testMovie.save() // will be saved as document 

    //SECOND WAY
    try{
        const movie = await Movie.create(req.body);
        res.status(201).json({
            data: {
                movie   // movie : movie should be used when both are diff 
            }
        })
    }
    catch (err) {
        res.status(400).json ({
            status : 'fail',
            message : err.message
        })
    }
}
exports.updateMovie = async(req, res) => {
    try {
         const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
         // new is set to true to return the updatedMovie 
         // runvalidator is set to tru e to check the conditions specified in schema
         res.status(201).json({
            data: {
                updatedMovie   // movie : movie should be used when both are diff 
            }
          }) 
        }
    catch (err) {
        res.status(400).json ({
            status : 'fail',
            message : err.message
        })
    }
}
exports.deleteMovie = async(req, res) => {
      try {
        await Movie.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : "success",
            data: null
          }) 
      }
      catch (err) {
        res.status(400).json ({
            status : 'fail',
            message : err.message
        })
    }
}