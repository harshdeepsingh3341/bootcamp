const todoItemsSchema = require('./todoItemsModel');
let TodoGroupModel;

exports.setTodoGroupModel = (mongoose) => {
    const TodoGroupSchema = mongoose.Schema({
        todoGroup_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        todoItems: {
            type: [todoItemsSchema(mongoose)],
            required: true,
            default: []
        }
    });
    TodoGroupModel = mongoose.model("TodoGroup", TodoGroupSchema)
};

exports.getAllTodoGroupDb = () => {
    return new Promise((resolve, reject) => {
        TodoGroupModel.find({}, {todoGroup_id: 1, name: 1, _id: 0}, (err, todoGroups) => {
            if (err) {
                reject(err);
            } else {
                console.log('todoGroups', todoGroups);
                resolve({
                    status: 200,
                    message: "success",
                    data: todoGroups
                })
            }

        })
    });
};

exports.deleteTodoGroup = (data) => {
    return new Promise((resolve, reject) => {
        TodoGroupModel.deleteOne(
            {
                todoGroup_id: data.todoGroupId
            },
            (err, done) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        status: 200,
                        message: 'success'
                    })
                }
            }
        );
    });
};

exports.addTodoGroup = (data) => {
    const newTodoGroup = new TodoGroupModel({
        ...data
    });
    return new Promise((resolve, reject) => {
        newTodoGroup.save((err, todoGroup) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    status: 200,
                    message: 'success',
                    data: todoGroup
                })
            }
        });
    });
};

exports.getTodosFromGroup = ({todoGroupId}) => {
    return new Promise((resolve, reject) => {
        TodoGroupModel.findOne({
                todoGroup_id: todoGroupId
            },
            {
                _id: 0
            },
            (err, todoGroup) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        status: 200,
                        message: "success",
                        data: todoGroup
                    })
                }
            }
        )
    })
};

exports.addNewTodoToGroup = (data) => {
    return new Promise((resolve, reject) => {
        TodoGroupModel.findOneAndUpdate({
                todoGroup_id: data.todoGroupId
            },
            {
                $push: {
                    todoItems: data
                }
            },
            {
                new: true
            },
            (err, todoGroup) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        status: 200,
                        message: 'success',
                        data: todoGroup
                    })
                }
            }
        );
    });
};

exports.toggleTodoCheck = (data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
        TodoGroupModel.findOneAndUpdate(
            {
                todoGroup_id: data.todoGroupId,
                'todoItems.todo_id': data.todoId
            },
            {
                'todoItems.$.isChecked': data.checked
            },
            {
                new: true,
                useFindAndModify: false
            },
            (err, todoGroup) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        status: 200,
                        message: 'success',
                        data: todoGroup
                    })
                }
            }
        );
    });
};

exports.editTodoInGroup = (data) => {
    return new Promise((resolve, reject) => {
        TodoGroupModel.findOneAndUpdate(
            {
                todoGroup_id: data.todoGroupId,
                'todoItems.todo_id': data.todoId
            },
            {
                'todoItems.$.todo': data.todo
            },
            {
                new: true,
                useFindAndModify: false
            },
            (err, todoGroup) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        status: 200,
                        message: "success",
                        data: todoGroup
                    })
                }
            }
        );
    });
};

exports.deleteTodoInGroup = (data) => {
    return new Promise((resolve, reject) => {
        TodoGroupModel.updateOne(
            {
                todoGroup_id: data.todoGroupId
            },
            {
                $pull: {
                    todoItems: {
                        todo_id: data.todoId
                    }
                }
            },
            (err, done) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        status: 200,
                        message: "success",
                        data: done
                    })
                }
            }
        );
    });
};