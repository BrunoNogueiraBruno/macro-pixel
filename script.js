const boardSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const newDocument = document.querySelector('#new-document');
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
generateBoard.addEventListener('click', function() {
  if (boardSize.value >= 5 && boardSize.value <= 50 && boardSize.value !== undefined) {
    newDocument.className = 'new-document-top';
    colorPalette.style.display = 'block';
    generatePixels(boardSize.value);
    boardSize.value = '';
  } else {
    alert("Insira um valor entre 5 e 50");
  }
})

function generatePixels(size) {
}