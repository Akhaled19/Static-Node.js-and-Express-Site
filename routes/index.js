//This file holds the main routes of my app 

const express = require('express');
const router = express.Router();
//do I need this here?
const {projects} = require('../data.json');

//where is the  section for projects routes?
 
//set up an 'index' (/) route
router.get('/', (req, res) => {
    //render the 'Home' page w/ locals set to data.projects 
    res.render('index');
});
    

//set up an 'about' (/about) route
router.get('/about', (req, res) => {
    //render the 'About' page
    res.render('about');
});


module.exports = router;