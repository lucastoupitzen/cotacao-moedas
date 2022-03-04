require("dotenv").config()

const sql = require("mysql")

module.exports = sql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.user,
    password: process.env.password,
    database: "moedas"
})

