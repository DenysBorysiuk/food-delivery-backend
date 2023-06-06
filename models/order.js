const Joi = require("joi");
const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    order: {
      type: Number,
    },
    totalAmount: {
      type: Number,
    },
    items: [
      {
        name: {
          type: String,
        },
        price: {
          type: String,
        },
        amount: {
          type: Number,
        },
        img: {
          type: String,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(6).required(),
  address: Joi.string().min(3).required(),
  order: Joi.number().required(),
  items: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      price: Joi.string().required(),
      amount: Joi.number().required(),
      img: Joi.string().required(),
    })
  ),
});

const Order = model("order", orderSchema);

module.exports = { addSchema, Order };
