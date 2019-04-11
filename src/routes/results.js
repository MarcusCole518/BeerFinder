const express = require("express");
const router = express.Router();

const resultsController = require("../controllers/resultsController")

router.get("/results", resultsController.index);

module.exports = router;