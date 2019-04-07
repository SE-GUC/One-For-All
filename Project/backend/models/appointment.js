const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
  location: {
    type: String,
  },
  slot: {
    type: Array,
  },
  
  memberID: {
    type: Number,
    required: true
  },
  memberName: {
    type: String,
    required: true
  },
  confirm: {
    type: Boolean,
    defaultValue: false,
    required: true
  },
});
  module.exports = appointment = mongoose.model('appointment',appointmentSchema);