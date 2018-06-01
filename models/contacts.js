var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var addressSchema = new Schema({
  name: String,
  street: String,
  city: String,
  state: String,
  zipcode: Number,
});

var Contacts = mongoose.model('Contacts', addressSchema);
module.exports = Contacts