const { text } = require('express')
const mongoose = require('mongoose')
//const marked = require('marked')
//const slugify = require('slugify')
//const createDomPurify = require('dompurify')
//const { JSDOM } = require('jsdom')
//const dompurify = createDomPurify(new JSDOM().window)

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