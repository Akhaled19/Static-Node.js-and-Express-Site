//This file holds the project routes of my app 

//missing: using the json file to render ids for each page 

const express = require('express');
const router = express.Router();

//set up a dynamic 'project' (/project) route 
router.get('/projects', (req, res) => {
    //render the 'project' page (see notes on treehouse)
    res.render('project');
}); 


//This allows us to export and use in app.js 
module.exports = router;