var options = {
  bgAlpha: 40,
  color: [200, 230, 200],
  backgroundColor: [100, 150, 100],
};

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(options, 'bgAlpha').min(0).max(255).step(.5);
  gui.addColor(options, 'color');
  gui.addColor(options, 'backgroundColor');
};