const express = require('express');
const router = express.Router();


const Movies = require ("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => 
{
    Movies.find().select({ title: 1, image: 1 }).sort({title:1})
    .then ((response) => {
        res.render('movies', {movies:response})  
    })
    .catch((err)=>{
        next(err)
    })
});

router.get('/movies/:movieId', (req, res, next) => 
{   
    const {movieId} = req.params
    Movies.findById(movieId)
    .then ((oneMovie) => {
     res.render('details', {oneMovie})  //
    })
    .catch((err)=>{
        next(err)
    })
});

module.exports = router;
