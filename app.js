// creates the canvas
function createCanvas(width, height) {

  const board = document.getElementById('board');
  const canvas = document.createElement('div');
  canvas.id = "canvas"

  for (var r = 0; r < height; r++) {
    var row = document.createElement('div');
    row.className = "row";
    for (var c = 0; c < width; c++) {
      var pixel = document.createElement('div');
      pixel.className = "pixel";
      row.append(pixel);
    }
    canvas.append(row);
  }
  board.replaceChild(canvas, document.getElementById('canvas'));
}

function paint(e) {
  e.target.className = 'pixel ' + selectedColor;
}

function selectColor(e) {
  selectedColor = e.target.classList[1];
  currentColor.className = selectedColor;

}

// create the pixels for the canvas
createCanvas(60, 40); // width , height

// UI elements
let pixels = document.querySelectorAll('.pixel');
let colors = document.querySelectorAll('.color');
let currentColor = document.getElementById('current-color');

// initial variables
let selectedColor = "white";

// add event listeners
pixels.forEach(pixel => pixel.addEventListener('click', paint));
colors.forEach(color => color.addEventListener('click', selectColor));
