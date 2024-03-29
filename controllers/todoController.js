const todoService = require("../services/todoService")();


const getTodoList = async (req, res, next) => {
    try {
        const userId = req.query.userId;
        if (userId <= 0) {
            res.status(400);
            throw new Error(`Not a valid userId ${userId}`);
        }
        const todoList = await todoService.getTodos(userId);
        let count = 0;
        todoList.forEach((task) => {
            if (task.completed) count++;
        });
        res.status(200).send(`The total number of tasks completed by user with id ${req.query.userId} is: ${count}`);
    } catch(err) {
        next(err);
    }
}

module.exports = { getTodoList };