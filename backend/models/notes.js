const mongoose = require("mongoose");

const { Schema } = mongoose;

const noteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: { type: String, required: true },
  desc: { type: String, default: "No description" },
});
module.exports = mongoose.model("notes", noteSchema);
