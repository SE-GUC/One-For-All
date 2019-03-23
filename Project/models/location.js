// The location model
const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const locationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
   reciever: {
    type: String,
    required: true
  },

});
  module.exports = location = mongoose.model('location',locationSchema);
