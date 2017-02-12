// require path npm to easily manipulate path
var path = require("path");


module.exports = function(app) {

	// When user clicks survey, show the survey.html page
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname,"/../public/survey.html"));
	});

	// if user enters anything else, they are rerouted to the home page as a default
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname,"/../public/home.html"));
	});

};
