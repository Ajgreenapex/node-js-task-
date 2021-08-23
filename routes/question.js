const express = require("express");
const router = express.Router();

const controllerQuestion = require("../controller/controllerQuestion");

router.get("/", controllerQuestion.getQuestions);
router.get("/:id", controllerQuestion.getByQuestionEmailId);
router.post("/", controllerQuestion.createQuestion);
router.patch("/:id", controllerQuestion.updateQuestion);
router.delete("/:id", controllerQuestion.deleteQuestion);

module.exports = router;
