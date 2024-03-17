const rive = require("@rive-app/canvas");
const canvasElement = document.getElementById('canvas');

const r = new rive.Rive({
  src: "keiharu.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  stateMachines: "State Machine 1"
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  }
});
