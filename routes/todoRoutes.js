const express = require("express");
const router = express.Router();
const { getTodoList } = require("../controllers/todoController");

router.route('/').get(getTodoList);

module.exports = router;
