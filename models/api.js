const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apiSchema = new Schema({
  tipe: String,
  image: String,
  Weight: Number,
  order: String  
})

module.exports = mongoose.model('Api', apiSchema)