const { todoModel } = require("../model/todoModel")

const getTodo = async (req, res) => {
    const todos = await todoModel.find();
    res.json({ message: "todos", todos })
}

const addTodo = async (req, res) => {
    const todo = await todoModel.create({ name: req.body.name })
    res.json({ message: "todo added", todo })
}


const updateTodo = async (req, res) => {
    const todo = await todoModel.findByIdAndUpdate(req.params.id, { name: req.body.name })
    res.json({ message: "todo updated", todo })
}


const deleteTodo = async (req, res) => {
    const todo = await todoModel.findOneAndDelete(req.params.id)
    res.json({ message: "todo removed", todo })
}



module.exports = {
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo
}