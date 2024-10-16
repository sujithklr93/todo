const express = require('express')
const path = require("path")
const dotenv = require('dotenv').config()
const { ErrorHandler } = require("./middleware/errorHandler")
const {main} = require("./config/db")
main();
const app = express();
app.listen(process.env.PORT, () => {
    console.log(`server started on ${process.env.PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, "public")))

app.use("/api/todo", require("./router/todoRouter"))

app.use(ErrorHandler)