                        /*require dependencies*/

//app.js requirements to be able to run the app

//required express
const express = require('express');

//require the middleware request 
const bodyParse = require('body-parser');

//creating a new express app
const app = express();


                            /*Middleware*/
//set up 'view engine' to pug 
app.set('view engine', 'pug');

//use a static route and the express.static method to serve the static files located in the public folder
app.use(bodyParse.urlencoded({extended: false}));
app.use('/static', express.static('public'));


                            /*Routes*/
//import router
const routes = require('./routes');
const IndexRoute = require('./routes/index');
const projectRoute = require('./routes/project');
const errorRoute = require('./routes/error');

//section to use a static route serve the image files for each project 


                        /*Start Server*/
//app should listen to port 3000
app.listen(3000, () => {
    //log a string to the console: which port the app is listening to
    console.log('This application is running on localhost:3000')
});



                        /*Handle Errors*/