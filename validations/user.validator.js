const Joi = require("joi");

const createUserPayload = Joi.object({
  email: Joi.string().email().required().trim().description("Email Id"),
  firstName: Joi.string().max(20).trim().required(),
  lastName: Joi.string().max(20).trim().required(),
});

const updateUserPayload = Joi.object({
  email: Joi.string().email().trim().description("Email Id"),
  firstName: Joi.string().max(20).trim(),
  lastName: Joi.string().max(20).trim(),
});

const createTopicPayload = Joi.object({
  title: Joi.string().max(50).trim().required(),
});
const createQuestionPayload = Joi.object({
  question: Joi.string().max(150).required(),
  titleId: Joi.string().trim().required(),
});
const updateQuestionPayload = Joi.object({
  question: Joi.string().max(150).required(),
});
const createAnswerPayload = Joi.object({
  answer: Joi.string().required(),
  questionId: Joi.string().trim().required(),
});
const updateAnswerPayload = Joi.object({
  answer: Joi.string().required(),
});
module.exports = {
  createUserPayload,
  updateUserPayload,
  createTopicPayload,
  createQuestionPayload,
  createAnswerPayload,
  updateQuestionPayload,
  updateAnswerPayload,
};
