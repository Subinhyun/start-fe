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
    e.stopPropagation(); 
    // 이 부분을 넣어줘야 빨간 타켓 클릭 시 점수와 생명이 동시에 +1, -1 되지 않음!
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

function missBug(event) {
    if(life === 0) {
        alert('gameover');
    }

    life -= 1;
    $life.innerHTML = life;
    moveBug();
}

setInterval(moveBug, 3000);