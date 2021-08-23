const express = require("express");
const router = express.Router();

const controllerAnswer = require("../controller/controllerAnswer");

router.get("/", controllerAnswer.getAnswers);
router.get("/:id", controllerAnswer.getByAnswerEmailId);
router.post("/", controllerAnswer.createAnswer);
router.patch("/:id", controllerAnswer.updateAnswer);
router.delete("/:id", controllerAnswer.deleteAnswer);

module.exports = router;
