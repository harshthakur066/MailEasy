const mongoose = require("mongoose");
const customerSchema = require("./Customer");

const { Schema } = mongoose;

const feedbackSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  subject: String,
  body: String,
  customers: [customerSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
});

mongoose.model("feedback", feedbackSchema);
