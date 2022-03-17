// var count = [10,20,30,40,50,60,70,100];

// function mean(arr) {
//     var answer = 0;
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++){
//      sum += arr[i];
//     }
//     return answer = sum / arr.length;
// }

// console.log(mean(count));

// function mean(arr) {
//     return arr.reduce((sum, current) => sum + current) / arr.length;
// }

// console.log(mean(count));

// for (var i = 2; i <= 9; i++) {
//     console.log( i + '단');
//     for (var j = 1; j <= 9; j++) {
//         console.log( i  + '*' + j + '=' + i*j );
//     }
// }

// function gugudan() {
//     for (var i = 2; i <= 9; i++) {
//         console.log( i + '단');
//         for (var j = 1; j <= 9; j++) {
//             console.log( i  + '*' + j + '=' + i*j );
//         }
//     }
// }

// gugudan();

// function gugudan() {
//     var num = prompt('숫자를 입력해주세요.');
//     for ( var i = 1; i <= 10; i++ ) {
//         console.log(num  + '*' + i + '=' + num*i);
//     }
// }

// gugudan();

// var me = {
//     nick: 'hsooovn',
//     age: 24,
//     area: 'jeju',
//     do:function(){
//         console.log('hsooovn');
//     }
// };

// me.do();

function sum() {
    let nums = [];
  
    while (true) {
      let value = window.prompt("숫자를 입력해 주세요.", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      nums.push(+value);
    }
  
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }
    return sum;
  }
  
  alert( sum() );