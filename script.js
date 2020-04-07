//grid maken 
for (i=0; i < 16; i++) {
    const container = document.querySelector('#container');

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = 'a';
    
    container.appendChild(cell);
}
//kleuren bij mouseover
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseenter', (e) => {
        cell.style.backgroundColor = 'blue';
    })
});

//resetfunctie
function resetCells() {
    cells.forEach((cell) => {
        cell.style.backgroundColor = '#eee'
    })
}