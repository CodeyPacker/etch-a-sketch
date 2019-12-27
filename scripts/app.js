const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// setup the canvas for drawing
const { width, height } = canvas;

// create random x and y points on canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function

// write a handler for the keys
function handleKey(e) {
  // e.preventDefault();
  console.log(e.key);
}

window.addEventListener('keydown', handleKey);