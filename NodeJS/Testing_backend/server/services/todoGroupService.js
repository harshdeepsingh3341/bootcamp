const {
    todoGroupModel: {
        getAllTodoGroupDb,
        addTodoGroup,
        deleteTodoGroup
    }
} = require("../mongoDb");
exports.getAllTodoGroup = () => getAllTodoGroupDb();

exports.addNewTodoGroup = (data) => addTodoGroup(data);

exports.deleteGroup = (data) => deleteTodoGroup(data);

