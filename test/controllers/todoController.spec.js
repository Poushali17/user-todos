// var Response as res = require('express');
// import {Response as res} from ('express');
var assert = require('assert');
const chai = require('chai'),
    sinon = require('sinon');
// const nock = require('nock');
const expect = chai.expect;
chai.should();
const { getTodoList } = require("../../controllers/todoController");
const todoService = require("../../services/todoService")();
// const { todoListRes } = require("../response");

describe('ToDoController', function(){

    describe('GetTodoList', function(){
        this.timeout(10000);
        beforeEach(function(){
            
            this.getTodoSrvice = sinon.stub(todoService, 'getTodos');
            // res.status = sinon.stub().returns(res);
            // this.res.send = sinon.stub().returns(res);
        });
        afterEach(function(){
            this.getTodoSrvice.restore();
        });
        // it('should return todo list', async function(){
        //     this.timeout(10000);
        //     var req = { query: sinon.spy },
        //         res = { send: sinon.spy() },
        //         next = sinon.spy();
        //     this.query = { userId: sinon.spy() };
        //     // this.query = sinon.spy({req: query});
            
        //         let result = await getTodoList(req, res, next);
        //         console.log(result);
        //         expect(typeof result).to.equal('number');
        //         result.should.be.equal(+0);
        //         // result.should.have.property('completed');

        // })

        it('should return todo list', async function(){
            this.timeout(10000);
            var req = { query: sinon.spy() },
                // res = { send: sinon.spy() },
                res = {
                    status: sinon.stub(),
                    send: sinon.stub(),
                  };
                next = sinon.spy();
            this.query = { userId: sinon.spy() };
            // this.query = sinon.spy({req: query});
                  await getTodoList(req, res, next);
                  console.log('resssss:::::', res);
                  expect(typeof res).to.equal('object');
                  res.should.have.property('status');

            // setTimeout(function () {
            //     getTodoList(req, res, next, function(result){
            //         console.log(result);
            //         expect(typeof result).to.equal('number');
            //         result.should.be.equal(+0);
            //         done();
            //     }, 1000);
            // })
                // console.log(result);
                // expect(typeof result).to.equal('number');
                // result.should.be.equal(+0);
                // result.should.have.property('completed');

        });
    })
});