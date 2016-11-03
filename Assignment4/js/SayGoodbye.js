(function(window){
	var ByeSpeaker = {};
	ByeSpeaker.SayBye = function(name){
		console.log("Goodbye " + name);
	}
	window.ByeSpeaker = ByeSpeaker;
})(window);