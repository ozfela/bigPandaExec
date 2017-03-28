var mongoose = require('mongoose');
var schema = mongoose.Schema;


mongoose.connect('mongodb://localhost/ozdb');

var commentSchema = new schema({
	email : { type: 'string',
			  require : true
			},
	message : { type: 'string' 
			},
	avatar : {type: 'string'}
});

module.exports = mongoose.model('Comments', commentSchema);