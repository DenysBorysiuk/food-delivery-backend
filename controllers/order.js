const ctrlWrapper = require("../helpers/ctrlWrapper");
const { Order } = require("../models/order");

const getAll = async (req, res) => {
  const allOrders = await Order.find();

  return res.json(allOrders);
};

const addNew = async (req, res) => {
  const result = await Order.create(req.body);
  return res.status(201).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  addNew: ctrlWrapper(addNew),
};
