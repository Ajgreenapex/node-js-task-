const express = require("express");
const router = express.Router();

const controllerTopic = require("../controller/controllerTopic");

router.get("/", controllerTopic.getTopics);
router.get("/:title", controllerTopic.getByTopicEmailId);
router.post("/", controllerTopic.createTopic);
router.patch("/:title", controllerTopic.updateTopic);
router.delete("/:title", controllerTopic.deleteTopic);

module.exports = router;
