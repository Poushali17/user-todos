var assert = require('assert');
const chai = require('chai'),
    sinon = require('sinon');
const nock = require('nock');
const expect = chai.expect;
// chai.use(require('sinon-chai'));
chai.should();
const todoService = require("../../services/todoService")();
const { todoListRes } = require("../response");

describe('ToDoService', function(){

    describe('GetTodos', function(){
        beforeEach(function(){
            // this.status = sinon.stub(response, 'status');
            // var url = 'https://jsonplaceholder.typicode.com/todos';
            // if (req.query.userId) url = url.concat(`?userId=${req.query.userId}`);
            // var path = req?.query?.userId ? `/todos?userId=${req.query.userId}` : '/todos';
            // var req = {query: sinon.spy()};
            // this.userId = sinon.spy(req.query.userId);
            nock('https://jsonplaceholder.typicode.com')
            .get(`/todos?userId=1`)
            .reply(200, todoListRes);
            // done();
        });
        afterEach(function(){
            // this.status.restore();
        });
        it('should return todo list', async function(){
            this.timeout(10000);
            // var req = {},
            //     res = {};
                // res.status = { send: sinon.spy()};
                // next = sinon.spy();
            
            // let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
            let result = await todoService.getTodos(1);
            // console.log(result);
            expect(typeof result).to.equal('object');
            // expect(result).to.have.status(200);
            expect(result).to.have.length.above(1);
            expect(result[0].title).to.equal('delectus aut autem');
            // result.should.have.status(200);
            // result.should.have.property('completed');


            // getTodos(req, res, next)
            // .then(resp => {
            //     console.log('res ::', resp);
            //     expect(typeof resp).to.equal('object');
            //     expect(resp).to.have.length.above(1);
            //     expect(resp[0].title).to.equal('delectus aut autem');
            //     // res.property.should.have('userId');   
            //     done();
            // }).catch((err) => done(err));


            // return getTodos(req, res, next, function(err, response) {
            //     console.log(response);
            //     // It should return an array object
            //     expect(Array.isArray(response)).to.equal(true);
            //     // Ensure that at least one follower is in the array
            //     expect(response).to.have.length.above(1);
            //     // Each of the items in the array should be a string
            //     done();
            //   });

        })
    })
});