// set up ======================================================================
const express  = require('express');
const app      = express(); 								// create our app w/ express
const port  	 = process.env.PORT || 8080; 				// set the port

app.use(express.static(__dirname + '/dist'));				// set the static files location /public/img will be /img for users
// routes ======================================================================
app.get('/', function(req, res) {
    res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(port, () => {
    console.log("App ready listening on port " + port);
});
