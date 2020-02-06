const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');

                        /*Handle Errors*/
//If no routes match, throw an 404 error
//do I need this more specific to projects ids?
router.use( (req, res, next) => {
    //display a user friendly message 
    const err = new Error('Could not find the requested resource');
    err.status = 404;
    next(err);
    });    

//error handler 
router.use( (err, req, res, next) => { 
    res.locals.error = err;
    //sets the status code 
    res.status(err.status);
    console.log(`Error: ${err.message}`);
    //pass in err object to give the template access to the error data
    res.render('error', err); 
});

//export error handlers in order to use elsewhere  
module.exports = router;
