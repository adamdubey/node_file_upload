function route(pathname) {
	console.log('About to route a request for ' + pathname);
}

function start(){
	console.log("Request handler 'start' was called");
}

function upload(){
	console.log("Request handler 'upload' was called");
}

exports.route = route;
exports.start = start;
exports.upload = upload;