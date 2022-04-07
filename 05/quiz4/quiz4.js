var $box = document.getElementById('box');
var isDrag = false;
var x = 0;
var y = 0;
var left = 0;
var top = 0;

$box.addEventListener('mousedown', (e) => {
    isDrag = true;
    x = e.clientX;
    y = e.clientY;
    left = $box.offsetLeft;
    top = $box.offsetTop;
});
$box.addEventListener('mousemove', (e) => {
    if(!isDrag) return;
    console.log(e.clientX - x + 'px');
    $box.style.left = left + (e.clientX - x) + 'px';
    $box.style.top = top + (e.clientY - y) + 'px';
});

$box.addEventListener('mouseup', (e) => {
    isDrag = false;
});
