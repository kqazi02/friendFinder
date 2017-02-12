// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");

console.log (friendsData);

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	// app.get("/api/friends", function(req, res) {
	//   res.json(friendsData);
	// });


	app.post("/api/friends", function(req, res) {
		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table

			userAnswers = req.body.scores;

			console.log ("user Answers " + userAnswers);

			var bestMatch = 0;

			var score = 0;

			var newScore;

			console.log ("friendsData length " + friendsData.length);

			for (var i = 0; i < friendsData.length; i++ ){
			
				newScore = 0;

				console.log("friend score " + friendsData[i].scores);

				for (var j = 0; j < friendsData[i].scores.length; j ++){

					newScore = newScore + (Math.abs(userAnswers[j] - friendsData[i].scores[j]));						

				}

				console.log (newScore);

				console.log (score);

				if (newScore <= score){

					score = newScore;
					bestMatch = i;
					console.log(bestMatch);
				}

			}

			friendsData.push(req.body);
			bestMatch = bestMatch;

			res.json(friendsData[bestMatch]);
	});
};