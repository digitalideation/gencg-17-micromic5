var options = {
  bgAlpha: 40,
  agentCount:10,
  /*actRandomSeed: 35,
  startLength: 500,
  howDeepToGoLengthMidl: 200,
  howDeepToGoLengthLow: 80,
  bgAlpha: 80, 
  circleLineColor: 255, 
  strokeColor: [255, 120, 0], //RGB   
  circleLineAlpha: 50,
  fill: false,*/
};

window.onload = function() {
  var gui = new dat.GUI();
  /*gui.add(options, 'actRandomSeed');
  gui.add(options, 'howDeepToGoLengthMidl').min(100).max(1000).step(10);
  gui.add(options, 'howDeepToGoLengthLow').min(10).max(100).step(1);
  gui.add(options, 'startLength').min(50).max(1000).step(10);*/
  gui.add(options, 'agentCount').min(0).max(500).step(1);
  gui.add(options, 'bgAlpha').min(0).max(255).step(.5);
  /*gui.add(options, 'circleLineColor').min(0).max(255).step(1);
  gui.add(options, 'circleLineAlpha').min(0).max(255).step(.5);
  gui.add(options, 'fill');
  gui.addColor(options, 'strokeColor');*/
};