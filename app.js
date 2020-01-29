                        /*require dependencies*/
//required express
//required data.json file
//the path module which can be used when setting the absolute path in the express.static function.



                            /*Middleware*/
//set up 'view engine' to pug 
//use a static route and the express.static method to serve the static files located in the public folder



                            /*Routes*/
//set up an 'index' (/) route
    //render the 'Home' page w/ locals set to data.projects 

//set up an 'about' (/about) route
    //render the 'About' page

//set up a dynamic 'project' (/project) route   
    //render the 'project' page (see notes on treehouse)



                        /*Start Server*/
//app should listen to port 3000
//log a string to the console: which port the app is listening to


                        /*Handle Errors*/
//404 error
    // if a user navigates to a non-existing route 
        //display a user friendly message 


//app.js error handler 
    // sets the error message to a user friendly message 
    //sets the status code 

//message in the console
    //if app point at a URL that doesn't exist as a router in the app ex: /error/error
        //console log a user friendly message    