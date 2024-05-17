document.addEventListener("DOMContentLoaded", () => {
  const layer1 = document.querySelector(".layer1");
  const layer2 = document.querySelector(".layer2");
  const layer3 = document.querySelector(".layer3");

  const layer1FilterDisplay = document.getElementById("layer1-filter");
  const layer2ColorDisplay = document.getElementById("layer2-color");
  const layer3ColorDisplay = document.getElementById("layer3-color");

  const updateLayer1Filter = (grayscale, brightness) => {
    const brightnessValue = brightness + "%";
    const filterValue = `grayscale(${grayscale}) brightness(${brightnessValue})`;
    layer1.style.filter = filterValue;
    layer1FilterDisplay.textContent = filterValue;
  };

  const updateLayerColor = (layer, l, c, h, displayElement) => {
    const color = `oklch(${l} ${c / 100} ${h})`;
    layer.style.backgroundColor = color;
    displayElement.textContent = color;
  };

  const updateBlendMode = (layer, blendMode) => {
    layer.style.mixBlendMode = blendMode;
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

  document.getElementById("l2").addEventListener("input", (event) => {
    const l = event.target.value;
    const c = document.getElementById("c2").value;
    const h = document.getElementById("h2").value;
    updateLayerColor(layer2, l, c, h, layer2ColorDisplay);
  });

  document.getElementById("c2").addEventListener("input", (event) => {
    const c = event.target.value;
    const l = document.getElementById("l2").value;
    const h = document.getElementById("h2").value;
    updateLayerColor(layer2, l, c, h, layer2ColorDisplay);
  });

  document.getElementById("h2").addEventListener("input", (event) => {
    const h = event.target.value;
    const l = document.getElementById("l2").value;
    const c = document.getElementById("c2").value;
    updateLayerColor(layer2, l, c, h, layer2ColorDisplay);
  });

  document.getElementById("blendMode2").addEventListener("change", (event) => {
    const blendMode = event.target.value;
    updateBlendMode(layer2, blendMode);
  });

  document.getElementById("l3").addEventListener("input", (event) => {
    const l = event.target.value;
    const c = document.getElementById("c3").value;
    const h = document.getElementById("h3").value;
    updateLayerColor(layer3, l, c, h, layer3ColorDisplay);
  });

  document.getElementById("c3").addEventListener("input", (event) => {
    const c = event.target.value;
    const l = document.getElementById("l3").value;
    const h = document.getElementById("h3").value;
    updateLayerColor(layer3, l, c, h, layer3ColorDisplay);
  });

  document.getElementById("h3").addEventListener("input", (event) => {
    const h = event.target.value;
    const l = document.getElementById("l3").value;
    const c = document.getElementById("c3").value;
    updateLayerColor(layer3, l, c, h, layer3ColorDisplay);
  });

  document.getElementById("blendMode3").addEventListener("change", (event) => {
    const blendMode = event.target.value;
    updateBlendMode(layer3, blendMode);
  });

  // Initial colors and blend modes update
  updateLayer1Filter(1, 150);
  updateLayerColor(layer2, 50, 50, 10, layer2ColorDisplay);
  updateLayerColor(layer3, 50, 50, 180, layer3ColorDisplay);
  updateBlendMode(layer2, document.getElementById("blendMode2").value);
  updateBlendMode(layer3, document.getElementById("blendMode3").value);
});
