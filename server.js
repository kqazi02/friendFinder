//import the node modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// connecting to mysql npm
// var mysql = require("mysql");

// creating express application
var app = express();

// local host uses port 3000. Using process.enc.PORT for online deployment.
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Serve static content for the app from the "public" directory in the application directory.
// there is no public content at this time.
app.use(express.static(__dirname + "/app/public"));


// Line 26 - 39 is for mysql. There is no sql database, at this time. Comeback an add it.
// var connectionInfo = {

//   host: "localhost",
//   user: "root",
//   password: "",
//   database: ""
// };

// if (process.env.JAWSDB_URL) {

// 	connectionInfo = process.env.JAWSDB_URL;
// }

// var connection = mysql.createConnection(connectionInfo);

// importing the routes from apiRoutes.js and htmlRoutes.js files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//staring the server
app.listen(PORT, function(){

	console.log("App is listening on PORT: " + PORT);

});