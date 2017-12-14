var options = {
  actRandomSeed: 35,
  startLength: 500,
  howDeepToGoLengthMidl: 200,
  howDeepToGoLengthLow: 80,
  bgAlpha: 80,
};

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(options, 'actRandomSeed');
  gui.add(options, 'howDeepToGoLengthMidl').min(100).max(1000).step(10);
  gui.add(options, 'howDeepToGoLengthLow').min(15).max(100).step(1);
  gui.add(options, 'startLength').min(50).max(1000).step(10);
  gui.add(options, 'bgAlpha').min(0).max(255).step(.5);
};