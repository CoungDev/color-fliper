const changerBtn = document.getElementById('changer-btn');
const bg = document.getElementById('section');
const hexcode = document.querySelector('span');

const changeColorHandler = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  bg.style.backgroundColor = `rgb(${red.toString()}, ${green.toString()}, ${blue.toString()})`;

  const hex = rgbToHex(red, green, blue);

  hexcode.textContent = hex;
};

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

changerBtn.addEventListener('click', changeColorHandler);
