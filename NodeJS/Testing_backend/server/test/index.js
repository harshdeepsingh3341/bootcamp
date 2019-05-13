const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);

let todoGroupId, todoId;

describe('/GET', () => {
    it('should return an error with page/route not found', done => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.status(404);
                res.body.should.have.property('stack');
                done();
            })
    })
});

describe('/GET/todoGroup/all todoGroup', () => {
    it('should return all the present to do groups', done => {
        chai.request(server)
            .get('/todoGroup/all')
            .end((err, res) => {
                console.log(res.body);

                res.body.should.be.a('object');
                res.body.should.have.status(200);
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                done();
            })
    });
});

describe('/POST/todoGroup todoGroup', () => {
    it('should add a todoGroup with the given name', done => {
        let todoGroup = {
            name: 'testGroup'
        };
        chai.request(server)
            .post('/todoGroup')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(todoGroup)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.status(200);
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.data.should.have.property('todoGroup_id');
                res.body.data.should.have.property('name');
                done();
                todoGroupId = res.body.data.todoGroup_id;
            })
    });
});

describe('/GET/todo/:todoGroupId/todos todo', () => {
    it('should return all the to dos inside the to do group of the given todoGroupId', done => {
        chai.request(server)
            .get(`/todo/${todoGroupId}/todos`)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                done();
            });
    });
});

describe('/POST/todo/:todoGroupId/todo todo', () => {
    it('should add new to do in the given to do group with the given to do data', done => {
        const todoData = `test to do ${Date.now()}`;
        let todo = {
            todo: todoData
        };
        chai.request(server)
            .post(`/todo/${todoGroupId}/todo`)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(todo)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                done();
                todoId = res.body.data.find(element => element.todo === todoData).todo_id;
                console.log(todoId);

            })
    });
});

describe('/PUT/todo/:todoGroupId/:todoId/toggleCheck/:check', () => {
    it('should turn the check to true for the given to do with todoId in the to do group with given todoGroupId', done => {
        chai.request(server)
            .put(`/todo/${todoGroupId}/${todoId}/toggleCheck/true`)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');

                res.body.data.find(element => element.todo_id === todoId).isChecked.should.be.equal(true);

                done();
            })
    });
    it('should turn the check to false for the given to do with todoId in the to do group with given todoGroupId', done => {
        chai.request(server)
            .put(`/todo/${todoGroupId}/${todoId}/toggleCheck/false`)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');

                res.body.data.find(element => element.todo_id === todoId).isChecked.should.be.equal(false);

                done();
            })
    });

});

describe('/PUT/todo/:todoGroupId/:todoId/editTodo', () => {
    it('should edit the to do with given todoId in the to do group with given todoGroupId', done => {
        let todo = {
            todo: `new test task ${Date.now()}`
        };
        chai.request(server)
            .put(`/todo/${todoGroupId}/${todoId}/editTodo`)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(todo)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');

                res.body.data.find(element => element.todo_id === todoId).todo.should.be.equal(todo.todo);

                done();
            })
    });
});

describe('/DELETE/todo/:todoGroupId/:todoId todo', () => {
    it('should delete the to do of given id inside the to do group having given todoGroupId', done => {
        chai.request(server)
            .delete(`/todo/${todoGroupId}/${todoId}`)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                done();
                todoId = undefined;
            })
    });
});

describe('/DELETE/todoGroup/:id todoGroup', () => {
    it('should delete the to do group with the given todoGroup_id', done => {
        chai.request(server)
            .delete(`/todoGroup/${todoGroupId}`)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                done();
                todoGroupId = undefined;
            })
    });
});
