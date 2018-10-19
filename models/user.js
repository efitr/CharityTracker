
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const User = mongoose.model('User', {
//     name: String,
//     password: String,
//     email: String
//     // interests: String,
//     //opinionId: {type: Schema.Types.ObjectId, ref: 'Opinion'}
//     // charityId: {type: Schema.Types.ObjectId, ref: 'Charity'}
// });

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;

