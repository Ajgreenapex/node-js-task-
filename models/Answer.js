const mongoose = require("mongoose");
const answerSchema = new mongoose.Schema({
  answer: {
    type: String,
    require: true,
  },
  questionId: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(" answer", answerSchema);
