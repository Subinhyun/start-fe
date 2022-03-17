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