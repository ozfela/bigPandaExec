angular.module('MainComments', [])
	.controller('CommentsController', ['$http', function($http)
	{
		var comments = this;
		
		comments.newComment = {};
		comments.items = [];

		var fetchComments = function(req, res){
			$http.get('/api/AllComments')
				.then(function(res){
					comments.items = res.data;
				}, function(err){
					console.error('Error while fetching comments');
				});
		}

		fetchComments();

		comments.addComment = function(){
			$http.post('/api/addComment', comments.newComment)
				.then(fetchComments())
				.then(function(res){
					comments.newComment = {};
				})
		}
	}])