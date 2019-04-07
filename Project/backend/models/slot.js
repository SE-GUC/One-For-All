const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const slotSchema = new Schema({
  location: {
    type: Array,
  },
  date: {
    type: Date,
    required:true
  },
  booked: {
    type: Boolean,
    default: false,
  },
  Appointments:{
    type:Array,
    required: false
  }
  
});
  module.exports = slot = mongoose.model('slot',slotSchema);
