const mongoose = require("mongoose");
const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  titleId: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(" Question", QuestionSchema);
