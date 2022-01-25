const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    measurment_unit: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    colors: [
      {
        _id: String,
        value: String,
      },
    ],
    sizes: [
      {
        _id: String,
        value: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
