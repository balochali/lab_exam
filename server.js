const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/users')
const userRouter = require('./routes/user')
const app = express()

mongoose.connect('mongodb://localhost/users', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const users = await User.find().sort({ createdAt: 'desc' })
  res.render('user/new', { user: user })
})

app.use('/user', userRouter)

app.listen(3000)