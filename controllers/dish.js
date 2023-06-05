const ctrlWrapper = require("../helpers/ctrlWrapper");
const { Dish } = require("../models/dish");

const getAll = async (req, res) => {
  const allDishes = await Dish.find();

  return res.json(allDishes);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
