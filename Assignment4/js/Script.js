var names = ["Jarvan", "Nocturne", "Thuan", "Jhin", "Binh", "Caitlyn", "Jinx", "Anivia", "Lucian", ];

for (var i = 0; i < names.length; i++) {
	if (names[i][0] === 'J' || names[i][0] === 'j'){
		ByeSpeaker.SayBye(names[i]);
	}
	else{
		HelloSpeaker.SayHello(names[i]);
	}
}