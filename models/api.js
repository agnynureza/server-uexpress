const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apiSchema = new Schema({
  type: String,
  image: String,
  weight: String,
  order: Number 
})

module.exports = mongoose.model('Api', apiSchema)