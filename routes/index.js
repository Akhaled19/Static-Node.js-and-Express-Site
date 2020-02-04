//This file holds the main routes of my app 

const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');
 
//get home page
router.get('/', (req, res) => {
    //render the 'Home' page w/ locals set to data.projects 
    res.render('index', {projects});
});
    

//set up an 'about' (/about) route
router.get('/about', (req, res) => {
    //render the 'About' page
    res.render('about');
});


module.exports = router;