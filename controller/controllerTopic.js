const Topic = require("../models/Topic");
const schema = require("../validations/user.validator");

const getTopics = async (req, res) => {
  try {
    const arrayData = await Topic.find();
    res.send(arrayData);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
const getByTopicEmailId = async (req, res) => {
  const title = req.params.title;
  try {
    const doc = await Topic.findOne({ title });
    if (doc) {
      res.send(doc);
    } else {
      res.status(404).send({ message: "title is not found" });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

const createTopic = async (req, res) => {
  const topic = req.body;
  try {
    await schema.createTopicPayload.validateAsync(topic);
    const topicDocument = await Topic.create(topic);
    //   const topicDocument = new Topic(topic);
    //   await topicDocument.save();
    res.status(201).send(topicDocument);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const updateTopic = async (req, res) => {
  const title = req.params.title;
  const updateTitle = req.body;
  try {
    await schema.createTopicPayload.validateAsync(updateTitle);
    let doc = await Topic.findOneAndUpdate({ title }, updateTitle, {
      new: true,
    });

    if (doc) {
      res.send(doc);
    } else {
      res.status(404).send({ message: "title is not found" });
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
const deleteTopic = async (req, res) => {
  const title = req.params.title;
  try {
    const doc = await Topic.findOneAndRemove({ title });

    res.status(200).send({ doc, message: "title deleted" });
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports = {
  getTopics,
  getByTopicEmailId,
  createTopic,
  updateTopic,
  deleteTopic,
};
