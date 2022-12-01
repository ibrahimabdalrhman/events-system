const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt-nodejs');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
      type: String,
      validate: [validator.isEmail, 'invalide email']
  },
  password: {
    type: String,
    default: "Egypt",
    required: true,
        min: 4
    },
  photo: {
    type: String,
  },
});

userSchema.methods.hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
userSchema.methods.comparePasswords = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}


const User = mongoose.model("User", userSchema);
module.exports = User;
