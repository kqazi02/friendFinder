//import the node modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/app/public"));

// var connectionInfo = {

//   host: "localhost",
//   user: "root",
//   password: "Tantdyalfsw#4",
//   database: ""
// };

// if (process.env.JAWSDB_URL) {

// 	connectionInfo = process.env.JAWSDB_URL;
// }

// var connection = mysql.createConnection(connectionInfo);

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function(){

	console.log("App is listening on PORT: " + PORT);

});