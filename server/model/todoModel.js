const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: String
},
{
    timestamps:true
}
);


const todoModel = mongoose.model('todo', todoSchema);


module.exports = {todoModel}