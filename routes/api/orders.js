const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/order");
const validateBody = require("../../middlewares/validateBody");
const { addSchema } = require("../../models/order");

router.get("/", ctrl.getAll);

router.post("/", validateBody(addSchema), ctrl.addNew);

module.exports = router;
