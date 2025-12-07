// Method for creating the etch board.
const createBoard = (row) => {
    let board = document.getElementsByTagName('main')[0];
    let width = board.clientWidth / row;

    for (let i = 0; i < row; i++) {
        let etchPixelRow = document.createElement('div');
        etchPixelRow.classList.add('etch-pixel-row')
        for (let j = 0; j < row; j++) {
            let etchPixel = document.createElement('div');
            etchPixel.style.width = width + 'px';
            etchPixel.style.height = width + 'px';
            etchPixel.addEventListener('mouseover', () => changeColor(etchPixel));
            etchPixelRow.appendChild(etchPixel);
        }
        document.getElementsByTagName('main')[0].appendChild(etchPixelRow);
    }
}

// Method for changing background color of pixels.
const changeColor = (etchPixel) => {
    etchPixel.style.background = "black";
}

// Reset board.
const reset = (row) => {
    let board = document.getElementsByTagName('main')[0];

    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    createBoard(row);
}

const setNew = () => {
    let row = document.getElementById('row').value;

    reset(row);
}

window.onload = () => {
    setNew();
}