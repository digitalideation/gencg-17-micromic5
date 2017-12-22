let options = {
	randomSeed: new Date().getTime() % 100000,
	numberOfAgents: 2,
	moveSpeed: 2,
	agentFatness: 3,
	timeToLive: 100,
	tileWidth: 90,
	tileHeight: 90,
	agentColor: [66, 230, 220], //RGB
	backgroundColor: [0, 0, 0], //RGB
	backgroundAlpha: 30, //0 - 100
	randomPlacement: false,
	useRadius: false,
	sendToNeighbor: true,
	bounceOffWindowBorder: true,
	bounceOffLocalBorder: false,
};

window.somethingChanged = true;
let controllers = [];

window.onload = function()
{
	window.gui = new dat.GUI();
	window.gui.closed = true;

	let randomSeedOpt = window
		.gui
		.add(options, 'randomSeed')
		.min(1)
		.max(100000)
		.step(1);
	let numberOfAgents = window
		.gui
		.add(options, 'numberOfAgents')
		.min(1)
		.max(10)
		.step(1);
	let agentFatness = window
		.gui
		.add(options, 'agentFatness')
		.min(1)
		.max(10)
		.step(1);
	let moveSpeed = window
		.gui
		.add(options, 'moveSpeed')
		.min(0.5)
		.max(5)
		.step(0.1);
	let backgroundAlpha = window
		.gui
		.add(options, 'backgroundAlpha')
		.min(0)
		.max(100)
		.step(1);
	let tileWidth = window
		.gui
		.add(options, 'tileWidth')
		.min(50)
		.max(1000)
		.step(1);
	let tileHeight = window
		.gui
		.add(options, 'tileHeight')
		.min(50)
		.max(1000)
		.step(1);
	let sendToNeighbor = window
		.gui
		.add(options, "sendToNeighbor");
	let bounceOffWindowBorder = window
		.gui
		.add(options, "bounceOffWindowBorder");
	let bounceOffLocalBorder = window
		.gui
		.add(options, "bounceOffLocalBorder");
	controllers.push(randomSeedOpt);
	controllers.push(numberOfAgents);
	controllers.push(agentFatness);
	controllers.push(tileWidth);
	controllers.push(tileHeight);
	controllers.push(backgroundAlpha);
	controllers.push(sendToNeighbor);
	controllers.push(bounceOffWindowBorder);
	controllers.push(bounceOffLocalBorder);
	controllers.push(window.gui.addColor(options, 'agentColor'));
	controllers.push(window.gui.addColor(options, 'backgroundColor'));

	controllers.forEach( function(element, index, arr)
	{
		element.onChange( function (value)
		{
			window.somethingChanged = true;
		});
	});

	randomSeedOpt.onChange( resetAgents );
	numberOfAgents.onChange( resetAgents );
	tileHeight.onChange( resetAgents );
	tileWidth.onChange( resetAgents );

	function resetAgents ()
	{
		agents = [];

		background(options.backgroundColor);

		randomSeed(options.randomSeed);

		spawnAgents();
	}
};