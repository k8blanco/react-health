var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
  firstName: String,
  lastName:String,
  phoneNumber: String,
  messageInput: String, 
  birthdate: String,
  race: String,
  hSuicidal : String,
  // clinicianMessages: [{clincianMessage: String, type: String}],
  clinicianMessages: { type : Array , "default" : [] },
  published_date: { type: Date },
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', ClientSchema);