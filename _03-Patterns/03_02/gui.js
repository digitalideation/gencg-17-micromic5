var options = {
  tileCount: 5,
  strokeColor: [255, 120, 0],
};

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(options, 'tileCount').min(1).max(15).step(1);
  gui.addColor(options, 'strokeColor');
};