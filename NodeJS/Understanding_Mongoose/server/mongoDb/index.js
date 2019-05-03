const mongoose = require('mongoose');
const {
    addTodoGroup,
    getAllTodoGroupDb,
    setTodoGroupModel,
    getTodosFromGroup,
    addNewTodoToGroup,
    toggleTodoCheck,
    editTodoInGroup,
    deleteTodoInGroup,
    deleteTodoGroup
} = require("./todoGroupModel");

mongoose.connect('mongodb://localhost:27017/mongoose', {
    useNewUrlParser: true
});

setTodoGroupModel(mongoose);

module.exports = {
    todoGroupModel: {
        getAllTodoGroupDb,
        addTodoGroup: (data) => addTodoGroup({
            ...data,
            todoGroup_id: mongoose.Types.ObjectId()
        }),
        deleteTodoGroup
    },
    todoModel: {
        getTodosFromGroup,
        addNewTodoToGroup: (data) => addNewTodoToGroup({
            ...data,
            todo_id: mongoose.Types.ObjectId()
        }),
        toggleTodoCheck,
        editTodoInGroup,
        deleteTodoInGroup
    },


};