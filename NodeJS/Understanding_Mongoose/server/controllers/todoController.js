const router = require('express').Router();
const {
    todoService:
        {
            getTodos,
            addNewTodo,
            toggleCheck,
            editTodo,
            deleteTodo
        }
} = require('../services');

router.get('/:todoGroupId/todos', (req, res, next) => {
    getTodos(req.params)
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            next(response)
        })
});

router.post('/:todoGroupId/todo', (req, res, next) => {
    console.log(req.params, req.body);
    addNewTodo({...req.params, ...req.body})
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            next(response)
        })
});

router.patch('/:todoGroupId/:todoId/toggleCheck/:checked', (req, res, next) => {
    toggleCheck(req.params)
        .then(response => {
            res.send(response);
        })
        .catch(response => {
            next(response)
        })
});

router.patch('/:todoGroupId/:todoId/editTodo', (req, res, next) => {
    editTodo({
        ...req.params,
        ...req.body
    })
        .then(response => {
            res.send(response);
        })
        .catch(response => {
            next(response);
        })
});

router.delete('/:todoGroupId/:todoId', (req, res, next) => {
    deleteTodo(req.params)
        .then(response => {
            res.send(response);
        })
        .catch(response => {
            next(response);
        });
});

module.exports = router;