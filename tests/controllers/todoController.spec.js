const chai = require("chai"),
    sinon = require("sinon");
const expect = chai.expect;
chai.should();
const { getTodoList } = require("../../controllers/todoController");
const todoService = require("../../services/todoService")();

describe('ToDoController', function(){

    describe('GetTodoList', function(){
        this.timeout(10000);
        beforeEach(function(){ 
            this.getTodoSrvice = sinon.stub(todoService, 'getTodos');
        });
        afterEach(function(){
            this.getTodoSrvice.restore();
        });

        it('should get todolist from todoService', async function(){
            this.timeout(10000);
            var req = { query: { userId: 1 } },
                res = {
                    status: sinon.stub(),
                    send: test,
                  },
                next = sinon.spy();
            function test(todo) {
                this.getTodoSrvice.getTodos(userId).calledOnce.should.be.true;
                expect(typeof todo).to.equal('string').that.equals(`The total number of tasks completed by user with id 1 is: 11`);
                res.should.have.status(200);
            }
                getTodoList(req, res, next);

        })
        it('should return HTTP 400 for negative integer', async function(){
            this.timeout(10000);
            var req = { query: { userId: -1 } },
                res = {
                    status: sinon.stub(),
                    send: test,
                  },
                next = sinon.spy();
            function test(todo) {
                expect(typeof todo).to.equal('string').that.equals(`Not a valid userId -1`);
                res.should.have.status(400);
            }
                getTodoList(req, res, next);

        })
    })
});