(function(window){
	var HelloSpeaker = {};
	HelloSpeaker.SayHello = function(name){
		console.log("Hello " + name);
	}
	window.HelloSpeaker = HelloSpeaker;
})(window);