const express = require('express');

const { getTodo, addTodo, updateTodo, deleteTodo } = require("../controller/todoController")
const router = express.Router();


router.route("/").get(getTodo).post(addTodo)
router.route("/:id").put(updateTodo).delete(deleteTodo)



module.exports = router