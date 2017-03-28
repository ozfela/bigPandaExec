var crypto = require('crypto'),
	request = require('request');

exports.GetAvatar = function(req,callback){
	var hash = crypto.createHash('md5').update(req).digest("hex");

	request("https://www.gravatar.com/avatar/"+hash+".jpg",function(err,response,body){
	if (!err){
		console.log("Got image: "+body);
		callback(null, body);
	}else{
		console.log("Error: "+err);
	}
})
}