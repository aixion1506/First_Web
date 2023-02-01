import { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    categoryTitle: {
      type: String,
      required: true,
    },
    categoryDescripton: {
      type: String,
      required: false,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    detailDescription: {
      type: String,
      required: true,
    },
    imageKey: {
      type: String,
      required: true,
    },
    inventory: {
      type: Number,
      required: true,
      default: 10,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    searchKeywords: {
      type: [String],
      required: true,
    },
  },
  {
    collection: "products",
    timestamps: true,
  },
);

export default ProductSchema;
