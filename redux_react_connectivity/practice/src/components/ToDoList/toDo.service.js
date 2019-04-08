export default class ToDoService {

    constructor() {
        const todos = localStorage.getItem('todos')
        this.todo = todos || [];
    }

    saveToDo = () => {
        localStorage.setItem('todos', JSON.stringify(this.todos))
    };


    getToDo = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({status: 'success', data: this.todos});
            }, 3000)
        })
    };

    addToDo = ({description, isDone = false}) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.todos = [...this.todos, {
                    id: Math.floor(Math.random() * 1000000),
                    description,
                    isDone
                }];

                this.saveToDo();
                resolve({status: 'success', data: this.todos})
            }, 3000)
        })
    };

    toggleDone = (id) => {
        return new Promise(resolve => {
            setTimeout(() => {
                this.todos = this.todo.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            isDone: !todo.isDone
                        }
                    }
                    return todo;
                });
                this.saveToDo();

                resolve({status: 'success', data: this.todos})
            }, 3000)
        })
    };

    edit = (updatedToDo) => {
        return new Promise(resolve => {
            setTimeout(() => {
                this.todos = this.todo.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            isDone: !todo.isDone
                        }
                    }
                    return todo;
                });
                this.saveToDo();

                resolve({status: 'success', data: this.todos})
            }, 3000)
        })
    }

    deleteToDo = (id) => {
        return new Promise(resolve => {
            setTimeout(() => {

                this.saveToDo();
                resolve({status: 'success', data: this.todos})
            }, 3000)
        })
    }
}