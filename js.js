

let GridContainer = document.querySelector('#grid');

let initialSize = 16;

function createGrid(size) {
    GridContainer.textContent = null;

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            let gridItem = document.createElement('div');
            gridItem.style.width = (800 / size) + "px";
            gridItem.style.height = (800 / size) + "px";
            gridItem.classList.add('gridItem');
            GridContainer.appendChild(gridItem);
        }
    }

    let gridItems = document.querySelectorAll('.gridItem');

    let makeRed = function() {
        this.classList.add('red');
    }
    
    gridItems.forEach(function(item) {
        item.addEventListener('mouseover', makeRed);
    });
}

createGrid(initialSize);

let sizer = document.getElementById('sizer');

let sizeEvent = function(e) {
    let selectedSize = null
    while(selectedSize == null || selectedSize > 100 || selectedSize < 1) {
        selectedSize = prompt('How many?');
    }
    size = selectedSize;
    createGrid(size); 
};

sizer.addEventListener('click', sizeEvent);