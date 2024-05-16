document.addEventListener("DOMContentLoaded", () => {
  const layer1 = document.querySelector(".layer1");
  const layer2 = document.querySelector(".layer2");
  const layer3 = document.querySelector(".layer3");

  const updateLayer1Filter = (grayscale, brightness) => {
    const brightnessValue = brightness + "%";
    layer1.style.filter = `grayscale(${grayscale}) brightness(${brightnessValue})`;
  };

  document.getElementById("grayscale1").addEventListener("input", (event) => {
    const grayscale = event.target.value;
    const brightness = document.getElementById("brightness1").value;
    updateLayer1Filter(grayscale, brightness);
  });

  document.getElementById("brightness1").addEventListener("input", (event) => {
    const brightness = event.target.value;
    const grayscale = document.getElementById("grayscale1").value;
    updateLayer1Filter(grayscale, brightness);
  });

  const updateLayerColor = (layer, l, c, h) => {
    const color = `oklch(${l}% ${c / 100} ${h}deg)`;
    layer.style.backgroundColor = color;
  };

  document.getElementById("l2").addEventListener("input", (event) => {
    const l = event.target.value;
    const c = document.getElementById("c2").value;
    const h = document.getElementById("h2").value;
    updateLayerColor(layer2, l, c, h);
  });

  document.getElementById("c2").addEventListener("input", (event) => {
    const c = event.target.value;
    const l = document.getElementById("l2").value;
    const h = document.getElementById("h2").value;
    updateLayerColor(layer2, l, c, h);
  });

  document.getElementById("h2").addEventListener("input", (event) => {
    const h = event.target.value;
    const l = document.getElementById("l2").value;
    const c = document.getElementById("c2").value;
    updateLayerColor(layer2, l, c, h);
  });

  document.getElementById("l3").addEventListener("input", (event) => {
    const l = event.target.value;
    const c = document.getElementById("c3").value;
    const h = document.getElementById("h3").value;
    updateLayerColor(layer3, l, c, h);
  });

  document.getElementById("c3").addEventListener("input", (event) => {
    const c = event.target.value;
    const l = document.getElementById("l3").value;
    const h = document.getElementById("h3").value;
    updateLayerColor(layer3, l, c, h);
  });

  document.getElementById("h3").addEventListener("input", (event) => {
    const h = event.target.value;
    const l = document.getElementById("l3").value;
    const c = document.getElementById("c3").value;
    updateLayerColor(layer3, l, c, h);
  });

  // Initial colors update
  updateLayer1Filter(0.5, 100);
  updateLayerColor(layer2, 50, 50, 0);
  updateLayerColor(layer3, 50, 50, 0);
});