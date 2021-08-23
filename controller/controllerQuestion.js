const Question = require("../models/Question");
const schema = require("../validations/user.validator");
const getQuestions = async (req, res) => {
  try {
    const arrayData = await Question.find();
    res.send(arrayData);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
const getByQuestionEmailId = async (req, res) => {
  const _id = req.params.id;
  try {
    const doc = await Question.findOne({ _id });
    if (doc) {
      res.send(doc);
    } else {
      res.status(404).send({ message: "Id is not found" });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

const createQuestion = async (req, res) => {
  const question = req.body;
  console.log("Question", question);
  try {
    await schema.createQuestionPayload.validateAsync(question);
    const QuestionDocument = await Question.create(question);
    //   const QuestionDocument = new Question(Question);
    //   await QuestionDocument.save();
    res.status(201).send(QuestionDocument);
  } catch (error) {
    console.log("errror=====>", error);
    res.status(400).send({ message: error.message });
  }
};
const updateQuestion = async (req, res) => {
  const _id = req.params.id;
  const updateid = req.body;
  try {
    await schema.updateQuestionPayload.validateAsync(updateid);
    let doc = await Question.findOneAndUpdate({ _id }, updateid, {
      new: true,
    });
    if (doc) {
      res.send(doc);
    } else {
      res.status(404).send({ message: "id is not found" });
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
const deleteQuestion = async (req, res) => {
  const _id = req.params.id;
  try {
    const doc = await Question.findOneAndRemove({ _id });

    res.status(200).send({ doc, message: "id deleted" });
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports = {
  getQuestions,
  getByQuestionEmailId,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
