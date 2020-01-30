                        /*require dependencies*/
//required express
const express = require('express');
//return the express application
const app = express();

//required data.json file
//the path module which can be used when setting the absolute path in the express.static function.



                            /*Middleware*/
//set up 'view engine' to pug 
app.set('view engine', 'pug');
//use a static route and the express.static method to serve the static files located in the public folder



                            /*Routes*/
//set up an 'index' (/) route
app.get('/', (req, res) => {
    //render the 'Home' page w/ locals set to data.projects 
    res.render('index');
});
    

//set up an 'about' (/about) route
app.get('/about', (req, res) => {
    //render the 'About' page
    res.send('<h1>This is where I will talk about myself</h1>');
});
    

//set up a dynamic 'project' (/project) route 
app.get('/projects', (req, res) => {
    //render the 'project' page (see notes on treehouse)
    res.send('<h1>This is where I show off my projects</h1>');
});  
    



                        /*Start Server*/
//app should listen to port 3000
app.listen(3000, () => {
    //log a string to the console: which port the app is listening to
    console.log('This application is running on localhost:3000')
});



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