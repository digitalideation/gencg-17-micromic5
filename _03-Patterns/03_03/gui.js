var options = {
  tileCount: 23,
  strokeColor: [255, 120, 0],
};

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(options, 'tileCount').min(1).max(25).step(1);
  gui.addColor(options, 'strokeColor');
};