const { Schema, model } = require("mongoose");

const foodSchema = new Schema(
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

const Food = model("food", foodSchema);

module.exports = { Food };
