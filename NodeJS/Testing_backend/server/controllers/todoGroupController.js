const {
    todoGroupService:
        {
            getAllTodoGroup,
            addNewTodoGroup,
            deleteGroup
        }
} = require("../services");
const router = require('express').Router();

router.get('/all', (req, res, next) => {
    getAllTodoGroup()
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            next(response)
        })
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    const data = req.body;
    addNewTodoGroup(data)
        .then(response => {
            res.send(response);
        })
        .catch(response => {
            next(response)
        })
});

router.delete('/:todoGroupId', (req, res, next) => {
    deleteGroup(req.params)
        .then(response => {
            res.send(response);
        })
        .catch(response => {
            next(response)
        })
});

module.exports = router;

