const $min = document.getElementById('min');
const $max = document.getElementById('max');

const $box = document.getElementById('box');
const $btn = document.getElementById('btn');

let num = 0;

$btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * ($max.value - $min.value) + $min.value);
    console.log($min.value);
    console.log($max.value);
    console.log(randomNumber);
    const interval = setInterval(() => {
        $box.innerHTML = num++;
        $btn.disabled = true;
        if(num === randomNumber){
            $btn.disabled = false;
            clearInterval(interval);
        }
    }, 5);
});
