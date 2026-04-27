let redWidth = 50;
let blueWidth = 50;
let redElement = document.getElementsByClassName("red")[0];
let blueElement = document.getElementsByClassName("blue")[0];

function addWidthRed() {
  redWidth++;
  blueWidth--;

  redElement.textContent = `${redWidth}%`;
  redElement.style.width = `${redWidth}%`;
  blueElement.textContent = `${blueWidth}%`;
  blueElement.style.width = `${blueWidth}%`;
}
function addWidthBlue() {
  redWidth--;
  blueWidth++;

  redElement.textContent = `${redWidth}%`;
  redElement.style.width = `${redWidth}%`;
  blueElement.textContent = `${blueWidth}%`;
  blueElement.style.width = `${blueWidth}%`;
}
