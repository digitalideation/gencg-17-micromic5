var options = {
  bgAlpha: 40,
};

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(options, 'bgAlpha').min(0).max(255).step(.5);
};