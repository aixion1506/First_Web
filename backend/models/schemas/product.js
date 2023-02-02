import { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "categorys",
      required: true,
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
      default: 10000,
      min: 0,
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
