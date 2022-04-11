const $point = document.getElementById('point');
const $life = document.getElementById('life');
const $box = document.querySelector('.box');
const $bug = document.getElementById('bug');

let point = 0;
let life = 10;

$bug.addEventListener('click', (e) => {
    point += 1;
    $point.innerHTML = point;
    moveBug();
});

$box.addEventListener('click', missBug);

function showBug() {
    $bug.style.display = 'block';
}

function moveBug() {
    $bug.style.left = getRandom($box.offsetWidth - $bug.offsetWidth) + 'px';
    $bug.style.top = getRandom($box.offsetHeight - $bug.offsetHeight) + 'px';
}

function getRandom(num){
    return Math.floor(Math.random() * num);
}

function missBug() {
    if(life === 0) alert('gameover');

    life -= 1;
    $life.innerHTML = life;
    moveBug();
}

setInterval(moveBug, 3000);