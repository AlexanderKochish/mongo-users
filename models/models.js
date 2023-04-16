const {Schema, model} = require('mongoose')

const User = new Schema({
  name:{type: String},
  email:{type:String, unique:true},
  phone:{type:String}
});

module.exports = model('user',User)