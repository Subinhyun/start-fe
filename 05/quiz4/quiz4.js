// var $box = document.getElementById('box');
// var isDrag = false;
// var x = 0;
// var y = 0;
// var left = 0;
// var top = 0;

// $box.addEventListener('mousedown', (e) => {
//     isDrag = true;
//     x = e.clientX;
//     y = e.clientY;
//     left = $box.offsetLeft;
//     top = $box.offsetTop;
// });
// $box.addEventListener('mousemove', (e) => {
//     if(!isDrag) return;
//     console.log(e.clientX - x + 'px');
//     $box.style.left = left + (e.clientX - x) + 'px';
//     $box.style.top = top + (e.clientY - y) + 'px';
// });

// $box.addEventListener('mouseup', (e) => {
//     isDrag = false;
// });
const $box = document.getElementById('box');

let isDown = false;
let offset = {x:0, y:0};

$box.addEventListener('mousedown', (e) => {
    isDown = true;
    offset.x = $box.offsetLeft - e.clientX;
    offset.y = $box.offsetTop - e.clientY;
});

$box.addEventListener('mouseup', (e) => {
    isDown = false;
});

$box.addEventListener('mousemove', (e) => {
    console.log('mousemove');
    if(!isDown) return;
    $box.style.left = e.clientX + offset.x + 'px';
    $box.style.top = e.clientY + offset.y + 'px';
});