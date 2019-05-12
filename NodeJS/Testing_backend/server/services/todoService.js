const {
    todoModel: {
        getTodosFromGroup,
        addNewTodoToGroup,
        toggleTodoCheck,
        editTodoInGroup,
        deleteTodoInGroup
    }
} = require('../mongoDb');

exports.getTodos = (data) => getTodosFromGroup(data);

exports.addNewTodo = (data) => addNewTodoToGroup(data);

exports.toggleCheck = (data) => toggleTodoCheck(data);

exports.editTodo = (data) => editTodoInGroup(data);

exports.deleteTodo = (data) => deleteTodoInGroup(data);