//This file holds the project routes of my app 

//setting requests for this file

const express = require('express');
const router = express.Router();

//projects is an array of objects 
const { projects } = require('../data.json');


//A dynamic 'project' route: If you go to a project without an id, it will send you back to the portfolio page with all projects 
//this logs a 304 Not Modified error 
router.get('/', (req, res) => {
    //redirect the 'project' page without an id 
    res.redirect('/');
}); 

//A dynamic 'project/id' using the json file to render ids for each page 
 router.get('/:id', (req, res) => {
    const {id} = req.params;
    const project = projects[id];
    res.render('project', {project});  
});

//This allows us to export and use in app.js 
module.exports = router;