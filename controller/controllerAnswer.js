const Answer = require("../models/Answer");
const schema = require("../validations/user.validator");

const getAnswers = async (req, res) => {
  try {
    const arrayData = await Answer.find();
    res.send(arrayData);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
const getByAnswerEmailId = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Answer.find({ questionId: id });
    if (doc) {
      res.send(doc);
    } else {
      res.status(404).send({ message: "id is not found" });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

const createAnswer = async (req, res) => {
  const answer = req.body;
  try {
    await schema.createAnswerPayload.validateAsync(answer);
    const AnswerDocument = await Answer.create(answer);
    //   const AnswerDocument = new Answer(Answer);
    //   await AnswerDocument.save();
    res.status(201).send(AnswerDocument);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const updateAnswer = async (req, res) => {
  const _id = req.params.id;
  const updateid = req.body;
  console.log(_id, updateid);
  try {
    await schema.updateAnswerPayload.validateAsync(updateid);
    let doc = await Answer.findOneAndUpdate({ _id }, updateid, {
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
const deleteAnswer = async (req, res) => {
  const _id = req.params.id;
  try {
    const doc = await Answer.findOneAndRemove({ _id });
    if (doc) {
      res.status(200).send({ doc, message: "id deleted" });
    } else {
      res.status(404).send({ message: "id is not found" });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports = {
  getAnswers,
  getByAnswerEmailId,
  createAnswer,
  updateAnswer,
  deleteAnswer,
};
