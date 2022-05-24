const express = require("express")
const app = express()
const userRouter = require("./routes/user")

app.set("view engine", "ejs")

app.use("/", (req, res)=>{
    res.render("index")
})


app.listen(3000, () => {
    console.log("Port: 3000")
})