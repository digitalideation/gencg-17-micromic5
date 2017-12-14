var options = {
  bgAlpha: 40,
  agentCount: 20,
  agentColor: [20, 150, 100],
};

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(options, 'bgAlpha').min(0).max(255).step(.5);
  gui.add(options, 'agentCount').min(5).max(900).step(5);
  gui.addColor(options,'agentColor');
};