// console.log('03');

// if("test"){
//     console.log("true");
// }

// "2" + 2; // '22'
// 2 + 5 + "1"; // '71'

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b);
// // a.x의 값도 변경됨 
// // 위치만 저장하기 때문?! 

// function byValue(count) {
//     count += 2;
// }
// var count = 3;
// byValue(count);
// console.log(count); //3

// function byReference(count) {
//     count.push('2');
// }
// var count = ['1'];
// byReference(count);
// console.log(count); //['1', '2']

// var isMan = true;
// var gender = '';
// if (isMan) {
//     gender = '남자';
// } else {
//     gender = '여자';
// }

// var obj = { a: 1, b: 2 };

// // 비권장
// for (var prop in obj) {
//     console.log(prop, obj[prop]);
// }

// var isClosed = true;
// while (isClosed) {
//     isClosed = false;
//     break;
// }

// function log(str) {
//     console.log(str);
// }

// var result = log('hello');
// console.log(result);


// function sum(x) {
//     var y = 1;
//     return x + y;
// }

// var sum = function() {
//     var y = 1;
//     return x + y;
// }

// try {

// }
// catch(e) {

// }
// finally {

// }

// alert('alert');
// var who = prompt('당신은 누구세요?'); // 취소 : null / 확인 : ''
// var isDelete = confirm('정말 삭제합니까?');
// if (isDelete) {
//     //.......
// }
// if (confirm('정말 삭제합니까?')) {
//     //.......
// }
// 좋은 코드? 전자가 더 좋음 

// function test() {
//     console.log('test()');
// }

// var id = setTimeout(test, 1000);

// var id = setInterval(test, 1000);

// function test() {
//     console.log('test()');
//     setTimeout(test, 1000);
// }

// var nick = 'aji';

// function test(){
//     var age = 30;
//     console.log(nick, age);
// }

// test();
// console.log(age);

// 호이스팅 
// var name = 'global';
// function test() {
//     console.log(name);
//     var name = 'local';
//     console.log(name);
// }

// test2();
// function test2() {
//     console.log('test');
// }

// function a() {
//     console.log('a');
//     function b() {}
// }

// // 익명 즉시실행함수, 스코프 보호
// (function() {
//     a = 1;
//     console.log(a);
// })();

// function sum(x, y) {
//     // if (!y) y = 1;
//     console.log(x + y);
// }
// sum(3);

// var text = 'abc def ghi jkl abc def';
// var testReg = /abc/; // 찾을 문자열
// var result = testReg.test(text);

// console.log(result); // true

// var matchReg = /abc/;
// var result = text.match(matchReg);
// console.log(result);

// var replaceReg = /def/;
// var result = text.replace(replaceReg, '가나다');
// console.log(result);

// function area1(width, height) {
//     console.log(width * height);
// }

// function area2(options) {
//     console.log(options.width * options.height);
// }

// area2({ width: 300, height: 200 });


// CRUD function


var todos = ['운동'];
var todo = '게임';

function create() {
    todos.push(todo);
    console.log(todos);
}

function read() {
    todos.forEach(function(todo) {
        console.log(todo);
    });
}

var updateTodo = '게임';

function update() {
    var updateIndex = todos.findIndex(function(todo) {
        return todo === updateTodo;
    });
    todos[updateIndex] = '공부';
    console.log(todos);
}

var deleteTodo = '공부';

function Delete() {

    var deleteIndex = todos.findIndex(function(todo) {
        return todo === deleteTodo;
    });
    todos.splice(deleteIndex, 1);
    console.log(todos);
}

create();
read();
update();
Delete();

