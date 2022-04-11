var $box = document.querySelector('.box');
var $addRed = document.querySelector('.add-red');
var $addBtn = document.querySelector('.add-btn');
var $deleteBtn = document.querySelector('.delete-btn');
var $textBtn = document.querySelector('.text-btn');
var $resetBtn = document.querySelector('.reset-btn');
var $toggleBtn = document.querySelector('.toggle-btn');
var $imageBtn = document.querySelector('.image-btn');

$addRed.addEventListener('click', addRed());
$addBtn.addEventListener('click', addBox());
$deleteBtn.addEventListener('click', deleteBox());
$textBtn.addEventListener('click', addText());
$resetBtn.addEventListener('click', reset());
$toggleBtn.addEventListener('click', toggle());
$imageBtn.addEventListener('click', printImg());

function addRed(){
    for(i = 0; i < $box.length; i++) {
        $box[i].className += ' red';
    }
}
function addBox(){
    var box = document.createElement('div');
    box.className = 'box';
    document.body.appendChild(box);
}

function deleteBox() {
    if($box.length === 0) return;

    $box[$box.length-1].remove();
}

function reset() {
    for (i = $box.length; i > 0; i--) {
        $box[i - 1].remove();
    }
}

function addText() {
    text = document.getElementsByClassName("txt");
    for(i = 0; i < $box.length; i++) {
        $box[i].innerHtml = text[0].value;
    }   
}

function toggle() {
    for(i = 0; $box.length; i++){
        $box[i - 1].classList.toggle("hide");
    }
    //$box.style.display !== 'none' ? 'none' : 'block';
}

function printImg(){
    if(!$box) addBox();
    var img = document.createElement('img');
    img.src = 'https://i.imgur.com/69NjYBH.png';

    for(i = 0; i < $box.length; i++) {
        $box[i].appendChild(img);
    }   
}