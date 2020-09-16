const boardSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const newDocument = document.querySelector('#new-document');
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

const firstColor = document.querySelector('.color0');
const secondColor = document.querySelector('.color1');
const thirdColor = document.querySelector('.color2');
const forthColor = document.querySelector('.color3');
generateBoard.addEventListener('click', function() {
  if (boardSize.value >= 5 && boardSize.value <= 50 && boardSize.value !== undefined) {
    newDocument.className = 'new-document-top';
    colorPalette.style.display = 'block';
    generatePixels(boardSize.value);
    boardSize.value = '';

    firstColor.addEventListener('click', setColorPalette);
    secondColor.addEventListener('click', setColorPalette);
    thirdColor.addEventListener('click', setColorPalette);
    forthColor.addEventListener('click', setColorPalette);
  } else {
    alert("Insira um valor entre 5 e 50");
  }
})
function setColorPalette() {
  let listOfColors = document.querySelectorAll('.color');

  for (index = 0; index < listOfColors.length; index += 1) {
    if (listOfColors[index] === this) {
      listOfColors[index].className = 'color color' + index.toString() + ' selected';

    } else {
      listOfColors[index].className = 'color color' + index.toString();
    }
  }
}

function generatePixels(size) {
}