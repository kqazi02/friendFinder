// Import the dummy data from friends.js file.
var friendsData = require("../data/friends.js");

// export the functions, which will be called in the server.js file.
module.exports = function(app) {

	// Get request is made when the user visits the api/friends page.
	// Show them all the people in the database.
	app.get("/api/friends", function(req, res) {
	  res.json(friendsData);
	});

	// Post request when the user submits the form on the questionnaire page
	app.post("/api/friends", function(req, res) {

			//Store the user input for the questions in a variable.
			//This should be an array with length of 10.
			userAnswers = req.body.scores;

			//This variable will be used to store the index of the person in the database
			//who matches the best with the user.
			var bestMatch = 0;

			//This variable will be used to determine which user has the "lowest" score
			// in other words, who is the most similar to the user
			//initializing to 41, because 40 is the maximum difference that two users can have
			var score = 41;

			//This variable will be used to compare current lowest score.
			var newScore;

			// Loop through the array of all the users in the database
			for (var i = 0; i < friendsData.length; i++ ){
				
				// set new score to 0
				newScore = 0;

				// Loop through the array of answers for each user
				for (var j = 0; j < friendsData[i].scores.length; j ++){

					// new score is the additions of the difference between the answers of current user
					// and a user in the database.
					newScore = newScore + (Math.abs(userAnswers[j] - friendsData[i].scores[j]));						
				} // nested for loop ends here

				// after the loop, if the newScore is less than current score, then score is replace by 
				// the newScore, and best match index is changed to the current position in the loop
				if (newScore < score){

					score = newScore;
					bestMatch = i;
				}

			} // outer for loop ends here

			//Push the current user to the array
			friendsData.push(req.body);

			// send the data for the best match to the server
			res.json(friendsData[bestMatch]);
	});
};