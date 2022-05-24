const { text } = require('express')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postcode: {
      type: String,
      required: true
  }
})


module.exports = mongoose.model('User', userSchema)