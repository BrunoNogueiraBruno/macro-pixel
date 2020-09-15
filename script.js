const boardSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const newDocument = document.querySelector('#new-document');

generateBoard.addEventListener('click', function() {
  newDocument.className = 'new-document-top';
})