const mongoose = require("mongoose");
const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Topic", TopicSchema);
