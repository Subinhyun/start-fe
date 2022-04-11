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
$box = document.getElementById('box');
var dragged = 'false';
var posx = 0;
var posy = 0;
$box.style.left = 0;
$box.style.top = 0;

$box.addEventListener('mousedown', function (e) {
  dragged = 'true';
  posx = e.clientX;
  posy = e.clientY;
});

document.addEventListener('mouseup', function (e) {
  dragged = 'false';
});

$box.addEventListener('mousemove', function (e) {
  if (dragged == 'true') {
   
    console.log(e.clientX - posx + 'px');
    console.log(parseInt($box.style.left) + (e.clientX - posx) + 'px');

    $box.style.left = parseInt($box.style.left) + (e.clientX - posx) + 'px';

    $box.style.top = parseInt($box.style.top) + (e.clientY - posy) + 'px';

    posx = e.clientX;
    posy = e.clientY;
  }
});