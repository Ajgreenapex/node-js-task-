const User = require("../models/User");
const schema = require("../validations/user.validator");

const getUsers = async (req, res) => {
  try {
    const arrayData = await User.find();
    res.send(arrayData);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getByUserEmailId = async (req, res) => {
  const email = req.params.id;
  try {
    const doc = await User.findOne({ email: email });
    if (doc) {
      res.send(doc);
    } else {
      res.status(404).send({ message: "Id is not found" });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

const createUser = async (req, res) => {
  const user = req.body;
  try {
    await schema.createUserPayload.validateAsync(user);
    const userDocument = new User(user);
    await userDocument.save();
    res.status(201).send(userDocument);
  } catch (error) {
    res.status(404).send({ message: error.details[0].message });
  }
};

const updateUser = async (req, res) => {
  const email = req.params.id;
  const user = req.body;

  try {
    await schema.updateUserPayload.validateAsync(user);
    let doc = await User.findOneAndUpdate({ email }, user, {
      new: true,
    });
    if (doc) {
      res.send(doc);
    } else {
      res.status(404).send({ message: "Id is not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const email = req.params.id;
  try {
    const doc = await User.findOneAndRemove({ email });
    res.status(200).send({ doc, message: " user  deleted" });
  } catch (error) {
    res.status(400).send({ error });
  }
};
module.exports = {
  getUsers,
  getByUserEmailId,
  createUser,
  updateUser,
  deleteUser,
};
