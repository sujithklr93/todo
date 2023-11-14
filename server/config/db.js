const mongoose = require("mongoose")

main().catch(err => console.log(err));

async function main() {
    const conn = await mongoose.connect(process.env.Mongo_URL);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



module.exports = { main }