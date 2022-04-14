const $min = document.getElementById('min');
const $max = document.getElementById('max');

const $box = document.getElementById('box');
const $btn = document.getElementById('btn');

let num = 0;

$btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * ($max.value - $min.value)) + $min.value;

    const interval = setInterval(() => {
        $box.innerHTML = num++;
        $btn.disabled = true;
        if(num === randomNumber){
            $btn.disabled = false;
            clearInterval(interval);
        }
    }, 5);
});

// function increased() {
//     $box.innerHTML = num++;
//     $btn.disabled = true;
//     if(num === getRandomNumber()){
//         $btn.disabled = false;
//         clearInterval(interval);
//     }
// }