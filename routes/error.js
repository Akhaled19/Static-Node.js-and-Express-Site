const express = require('express');
const router = express.Router();

                        /* 500s */
 router.use( (err, req, res, next) => {
    err.status = 500;
    next(err);
}); 

                        /* 404 */
//If no routes match, throw an 404 error
router.get( '*', (req, res, next) => {
    //display a user friendly message 
    const err = new Error('Could not find the requested resource.');
    err.status = 404;
    console.log(err.stack);
    next(err);
});    

                        /* Error Handler */                        
router.use( (err, req, res, next) => { 
    res.locals.message = err.message;
    res.locals.status = err.status;
    
    console.error(err.stack);
    //pass in err object to give the template access to the error data
    res.render('error');
});

//export error handlers in order to use elsewhere  
module.exports = router;