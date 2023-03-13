const chai = require("chai"),
    sinon = require("sinon");
const nock = require("nock");
const expect = chai.expect;

const todoService = require("../../services/todoService")();
const { todoListRes } = require("../response");

chai.should();

describe('ToDoService', function(){

    describe('GetTodos', function(){
        beforeEach(function(){
            nock('https://jsonplaceholder.typicode.com')
            .get(`/todos?userId=1`)
            .reply(200, todoListRes);
        });
        it('should return todo list', function(){
            this.timeout(10000);
            return todoService.getTodos(1).then(
                (result) => {
                    expect(typeof result).to.equal('object');
                    expect(result).to.have.length.above(1);
                    expect(result[0].title).to.equal('delectus aut autem');
                    result[0].should.have.property('userId').that.equals(1);
               }
           );
        })
    })
});