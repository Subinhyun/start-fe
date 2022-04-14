const $box = document.querySelector('.box');

let isDown = false;
let offset = {x:0, y:0};
let dragged = null;
let position = 10;

function dragBox(el) {
    el.addEventListener('mousedown', (event) => {
        isDown = true;
        dragged = el;
        offset.x = el.offsetLeft - event.clientX;
        offset.y = el.offsetTop - event.clientY;
        el.style['zIndex'] = position++; // 선택된 박스가 위로 올라가도록!
    });
}

function mouseEvent() {
    document.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    document.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        dragged.style.left = e.clientX + offset.x + 'px';
        dragged.style.top = e.clientY + offset.y + 'px';
    });
}

mouseEvent();

dragBox(document.querySelector('.box'));
dragBox(document.querySelector('.box1'));