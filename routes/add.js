var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://loremflickr.com/500/500/friend"
	}

	data.friends.push(newFriend);
	res.render('index', data);
 }