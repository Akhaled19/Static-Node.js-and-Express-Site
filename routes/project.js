//This file holds the project routes of my app 

const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');

//A dynamic 'project' route: If you go to a project without an id, it will send you back to the portfolio page with all projects 
router.get('/', (req, res) => {
    //render the 'project' page without an id 
    res.render('/');
}); 

//Set up a dynamic 'project/id' using the json file to render ids for each page 


//This allows us to export and use in app.js 
module.exports = router;