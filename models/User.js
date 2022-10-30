const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,},
  age: Number,
  favoriteFood:{type: [String]}
});

module.exports = User = model("User", userSchema);
