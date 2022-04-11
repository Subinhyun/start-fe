var $btn = document.getElementById('btn');
var $num = document.getElementById('num');
var $result = document.getElementById('result');

function gugudan() {
    const num = $num.value;
    let str = '';
    if(isNaN(num) == true) alert('숫자를 입력해주세요.');
    
    for ( var i = 1; i <= 10; i++ ) {
        str += `${num} x ${i} = ${num*i}<br />`;
    }
    console.log(str);
    $result.innerHTML = str;
}

$btn.addEventListener('click', gugudan);

