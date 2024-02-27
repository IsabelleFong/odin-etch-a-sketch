// Create a grid of 16x16 divs 
let output = ''

for (let j = 0; j < 16; j++) {
    output += '<div class="row">\n';
    for (let i = 0; i < 16; i++) {
        output += '<div class="square"></div>\n';
    }
    output += '</div>\n';
}

document.getElementById('container').innerHTML = output;


// Change div's background when mouse hovers over it
document.querySelectorAll('.square').forEach(box => box.addEventListener('mouseover', changeColor));

function changeColor() {
    this.style.backgroundColor = randomColor();
}


// Add a button to clear the grid and prompt the user to enter a new grid size
document.getElementById('button').addEventListener('click', newGridSize);

function newGridSize() {
    let width;

    do {
        width = Number(prompt('Enter the number of squares per side'));
    }
    while (width < 1 || width > 100 || isNaN(width));

    // Clear grid
    document.getElementById('container').innerHTML = '';

    // Create new grid
    let output = ''

    for (let j = 0; j < width; j++) {
        output += '<div class="row">\n';
        for (let i = 0; i < width; i++) {
            output += '<div class="square"></div>\n';
        }
        output += '</div>\n';
    }

    document.getElementById('container').innerHTML = output;

    // Calculate width & height of each square
    const squareWidth = 640 / width;

    document.querySelectorAll('.square').forEach(function (box) {
        box.style.width = squareWidth + 'px';
        box.style.height = squareWidth + 'px';
    });

    // Change div's background when mouse hovers over it
    document.querySelectorAll('.square').forEach(box => box.addEventListener('mouseover', changeColor));

    function changeColor() {
        this.style.backgroundColor = randomColor();
    }
}


// Randomise the color of the divs when the mouse hovers over them
function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}


