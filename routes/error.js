const express = require('express');
const router = express.Router();
//do I need this here?
const {projects} = require('../data.json');

                        /*Handle Errors*/
//404 error
//do I need this more specific to projects ids?
    // if a user navigates to a non-existing route 
    router.use( (req, res, next) => {
        //display a user friendly message 
        const err = new Error('Could not find the requested resource');
        err.status = 404;
        next(err);
    });    

//app.js error handler 
router.use( (err, req, res, next) => { 
    //sets the status code 
    res.status(err.status);
    console.log(`Error: ${err.message}`);
    //pass in err object to give the template access to the error data
    res.render('error', err); 
});
