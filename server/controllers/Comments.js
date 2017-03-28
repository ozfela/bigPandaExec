var Comments = require('../models/Comments.js');

exports.GetAllComments = function(callback){
	Comments.find({}, function(err, comments){
		if (err) {
			callback(err);
		} else {
			callback(null, comments);
		}
	})
}

exports.addComment = function(req, res){
	var newComment = Comments({
		email: req.email,
		message: req.message,
		avatar: req.avatarUrl
	});

	newComment.save(function(err){
		if (err) {
			throw err
		}

		console.log('Commet added.')
	})
}