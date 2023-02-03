import { Schema } from "mongoose";

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  // description: {
  //   type: String,
  //   required: true,
  // },
  // theme: {
  //   type: String,
  //   required: true,
  // },
  // imageKey: {
  //   type: String,
  //   required: true,
  // },
});

export default CategorySchema;
