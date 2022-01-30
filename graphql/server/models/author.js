const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("Author", authSchema);
