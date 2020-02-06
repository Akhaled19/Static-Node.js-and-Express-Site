//This file holds the project routes of my app 

const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');

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
    //Object.values() is a method that returns an array of a given object
    const projectsArray = Object.values(projects);
    //checks if the id matches up with any of project in the array
    projectsArray.forEach(project => {
        if(project.id === id ) {
            // to render these properties and store it in the currentProject object 
            const currentProject = {
                project_name: project.project_name,
                description: project.description,
                technologies: project.technologies,
                live_link: project.live_link,
                github_link: project.github_link,
                image_urls: project.image_urls
            };
            //takes a local & callback 
            res.render('project', currentProject);
        }
    });
});

//This allows us to export and use in app.js 
module.exports = router;