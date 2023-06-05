const { Schema, model } = require("mongoose");

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    price: {
      type: String,
    },
    firm: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Dish = model("dish", dishSchema);

module.exports = { Dish };
