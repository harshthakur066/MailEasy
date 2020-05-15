const mongoose = require("mongoose");

const { Schema } = mongoose;

const customerSchema = new Schema({
  email: String,
  response: { type: Boolean, default: false },
});

module.exports = customerSchema;
