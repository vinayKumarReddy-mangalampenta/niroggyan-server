const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.getAvailableUsers);
router.get("/:userId", controller.getUserData);

module.exports = router;
