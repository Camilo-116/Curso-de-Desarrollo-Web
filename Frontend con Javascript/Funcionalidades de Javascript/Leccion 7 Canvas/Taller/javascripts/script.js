var canvas  = document.getElementById('canvas');

var centro = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

var ctx = canvas.getContext('2d');

// Cabeza

ctx.beginPath();

ctx.arc(centro.x, centro.y, 80, 0, 2 * Math.PI);

ctx.fillStyle = 'black';

ctx.fill();

//Orejas
ctx.beginPath();
ctx.arc(centro.x-80, centro.y-90, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.arc(centro.x+80, centro.y-90, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

