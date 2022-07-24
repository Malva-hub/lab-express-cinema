const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [{type :String}],
    image: String,
    description: String,
    showtimes: [{type:String}]
})

const Movies = mongoose.model("Movies", moviesSchema)

module.exports = Movies