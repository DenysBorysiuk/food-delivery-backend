const ctrlWrapper = require("../helpers/ctrlWrapper");
const { Food } = require("../models/food");

const getAll = async (req, res) => {
  const allFoods = await Food.find();

  return res.json(allFoods);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
