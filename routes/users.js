const express = require("express");
const router = express.Router();
const users = require("../controllers/usersControllers");

router.get("/users", users.getAll);
router.get("/users/:id", users.getById);
router.post("/users", users.register);

module.exports = router;
