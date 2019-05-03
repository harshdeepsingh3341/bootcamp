const {
    getAllTodoGroup,
    addNewTodoGroup,
    deleteGroup
} = require("./todoGroupService");
const {
    getTodos,
    addNewTodo,
    toggleCheck,
    editTodo,
    deleteTodo
} = require('./todoService');
module.exports = {
    todoGroupService: {
        getAllTodoGroup,
        addNewTodoGroup,
        deleteGroup
    },
    todoService: {
        getTodos,
        addNewTodo,
        toggleCheck,
        editTodo,
        deleteTodo
    }
};