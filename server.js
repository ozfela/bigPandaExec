var express = require('express'),
	bodyparser  = require('body-parser'),
	morgan = require('morgan'),
	Comments = require('./server/controllers/Comments.js'),
	Gravatar = require('gravatar'),
	port   = 8000;

var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/public'));
app.use(morgan());
app.use(bodyparser());

router.post('/addComment', function(req, res){
		
		req.body.avatarUrl = Gravatar.url(req.body.email, {s: '100', r: 'pg', d: 'retro'}, false);	
		console.log('avatar : ' + req.body.avatarUrl);
		res.send(Comments.addComment(req.body));
})

router.get('/AllComments', function(req, res){
	Comments.GetAllComments(function(err, comments){
		if(err) {
			console.log('error when fetching data from mongo : ' + err);
		} else {
			res.send(comments);
		}
	})
})

app.use('/api', router);

app.listen(port);
console.log('server running on port : ' + port);