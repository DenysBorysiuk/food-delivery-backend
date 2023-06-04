const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/order");

router.get("/", ctrl.getAll);

module.exports = router;
