                        /*Handle Errors*/
//404 error
    // if a user navigates to a non-existing route 
    app.use( (req, res, next) => {
        //display a user friendly message 
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });    

//app.js error handler 
app.use( (err, req, res, next) => { 
    // sets the error message to a user friendly message 
    res.locals.error = err;
    //sets the status code 
    res.status(err.status);
    //pass in err object to give the template access to the error data
    res.render('error', err); 
});

//message in the console
    //if app point at a URL that doesn't exist as a router in the app ex: /error/error
    app.use( (req, res, next) => {
        //console log a user friendly message  
        const err = new Error('oh noes!');
        next(err);  
    });    