const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
  },
  className: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

let User = mongoose.model("User", userSchema);

module.exports = User;
