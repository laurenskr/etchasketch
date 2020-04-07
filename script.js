let gridSize = 4
makeGrid(gridSize)
hoverColor()
color = "blue";
//grid maken 
function makeGrid(gridSize) {
    for (i=0; i < gridSize**2; i++) {
    const container = document.querySelector('#container');

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = '';
    cell.style.width = `${100/gridSize}%`
    container.appendChild(cell);
    }
}    
//kleuren bij mouseover
function hoverColor() {
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
    cell.addEventListener('mouseenter', (e) => {
        cell.style.backgroundColor = "blue";
    })
});
}

//resetfunctie
function resetCells() {
    const container = document.querySelector('#container');
    cells.forEach((cell) => {
        // cell.style.backgroundColor = '#eee'
        container.removeChild(cell);
    })
    gridSize = prompt("How big should one side of the square be?")

    makeGrid(gridSize);
    hoverColor();
}
function setToRandom() {
    color = randomColor();
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
    cell.addEventListener('mouseenter', (e) => {
        cell.style.backgroundColor = randomColor();
    })
});
}
function setToBlue() {
    let color = "blue";
    return color; 
}