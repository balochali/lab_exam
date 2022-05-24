const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/users')
const userRouter = require('./routes/user')
const app = express()


mongoose.connect('mongodb://localhost/users', {
    useCreatendex: true,  
    useNewUrlParser: true, 
    useUnifiedTopology: true 
 }, err => {
    console.log(err)
 })
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use('/user', userRouter)

app.listen(3000)