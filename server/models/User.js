const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String, 
  email: String,
  password: String
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;

/*
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
*/