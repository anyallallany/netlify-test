const express = require("express")
const path = require("path")

const app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", {
        data: JSON.stringify(process.env, null, 4)
    })
})

module.exports = app