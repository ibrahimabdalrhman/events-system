const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.post("/login", userController.login);
router.post("/signup", userController.signup);
// router.get("/", userController.getUsers);
// router.post("/", eventController.createEvent);
// router.get("/:id", eventController.getEventById);
// router.patch("/:id", eventController.updateEvent);
// router.delete("/:id", eventController.deleteEvent);

module.exports = router;
