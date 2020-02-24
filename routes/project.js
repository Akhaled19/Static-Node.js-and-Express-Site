//This file holds the project routes of my app 

const express = require('express');
const router = express.Router();
//projects is an array of objects 
const { projects } = require('../data.json');

//A dynamic 'project' route: If you go to a project without an id, it will send you back to the portfolio page with all projects 
router.get('/', (req, res) => {
    //redirect the 'project' page without an id 
    res.redirect('/');
}); 

//A dynamic 'project/id' using the json file to render ids for each page 
//When the request is sent, it converts the projects object to an array 
//then it renders the current project data to use in the pug template
 router.get('/:id', (req, res) => {
    const {id} = req.params;
    const project = projects[id];
    
    //checks if the id is greater than the length of the projects array
        if(id >= projects.length ) {
            res.render('error', {
                err: {
                    status: '404',
                    message: 'Could not find the requested resource',
                    stack: 'none'
                }
            });
             // to render these properties and store it in the currentProject object 
           
            //takes a local & callback 
            res.render('project', );
     
        } else {
            res.render('project', {project,});
        }
   
});

/*
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const projectsArray = Object.values(projects);
    //const project = projectsArray[id];
    if(id >= projectsArray.length){
        res.render('error', {
            err: {
                status: err.status,
                message: err.status,
                stack: err.stack
            }
        });
    } else {
        res.render('project', {projects});
    }
});
*/
//This allows us to export and use in app.js 
module.exports = router;