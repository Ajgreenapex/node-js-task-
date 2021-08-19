const express = require("express");
const router = express.Router();
const controller = require("../controller/controllerUser");

router.get("/users", controller.getUsers);
router.get("/user/:id", controller.getByUserEmailId);
router.post("/user", controller.createUser);
router.patch("/user/:id", controller.updateUser);
router.delete("/user/:id", controller.deleteUser);

module.exports = router;
