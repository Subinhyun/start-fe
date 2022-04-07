var wrap = document.querySelector('.wrap');
var str = '';
var className = '';
var isWhite = false;

for(var i=0; i < 4; i++){
    for(var j=0; j < 4; j++){
        if(isWhite) {
            className = 'white';
        } else {
            className = 'black';
        }

    str += '<div class="'+ className +'"></div>';
    isWhite = !isWhite;
    }
    isWhite = !isWhite;
}

wrap.innerHTML = str;

var boards = document.querySelectorAll('.wrap > div');
var selectedDom = null;

function selectBoard(event) {
    console.log('selected');

    var board = event.currentTarget;
    console.log(board)

    if(selectedDom){
        selectedDom.className =  selectedDom.className.replace(' select', '');
    }

    board.className += ' select';
    selectedDom = board;
}

for(var i=0; i<boards.length; i++) {
    boards[i].addEventListener('click', selectBoard);
}