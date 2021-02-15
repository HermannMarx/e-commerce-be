const express = require("express");
const router = express.Router();
const procucts = require("../controllers/productsController");

router.get("/products/:id", procucts.getById);
router.get("/products", procucts.getAll);

module.exports = router;
