let options = {
	randomSeed: new Date().getTime() % 100000,
	numberOfAgents: 3,
	moveSpeed: 3,
	// maxSpeed: 5,
	agentFatness: 3,
	// turnRadius: Math.PI/32,
	timeToLive: 100,
	// tileWidth: 200,
	// tileHeight: 200,
	tileWidth: 120,
	tileHeight: 150,
	agentColor: [66, 230, 220], //RGB
	backgroundColor: [0, 0, 0], //RGB
	backgroundAlpha: 5, //0 - 100
	randomPlacement: false,
	useRadius: false,
	sendToNeighbor: true,
	bounceOffWindowBorder: true,
	bounceOffLocalBorder: false,
};