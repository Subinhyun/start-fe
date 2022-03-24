// console.log('04');

// const element = document.getElementById('wrap');
// console.log(element);

// const itemElement = document.querySelector('.item');
// console.log(itemElement);

// const elements =  document.querySelectorAll('div');
// console.log(elements);

// const div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";

// document.body.appendChild(div);

// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!');
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);

// const text = '<span>hello</span>';
// document.querySelector('#debug').innerHTML = text;

// document.querySelector('#wrap').innerHTML = document.querySelector('#wrap').innerHTML + 111;

// const el = document.getElementById('div1');
// el.remove();

// const list = document.getElementById('list'); 
// list.removeChild(list.children[0]);

// window.onload = function () {
//     console.log('hello');
// }
// body에 있는 onload 함수와 같은 속성을 사용하기 때문에 하나만 실행됨.

// window.addEventListener('load', function() {
//     console.log('load');
// });

// window.addEventListener('load', function() {
//     console.log('load2');
// });

// var clickCount = 0;
// function popup(event) {
//     console.log(++clickCount);
//     console.log(arguments, this ,event ,event.type,event.currentTarget);
// }
// document.body.addEventListener('click', popup);

// document.body.addEventListener('click', function(){
//     console.log("click");
// });

var link = document.querySelector('a');
lick.addEventListener('click', function(event){
    window.open('https://www.daun.net');
    event.preventDefault();
});