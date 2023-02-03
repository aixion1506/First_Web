import { Schema, SchemaType } from "mongoose";

const OrderProductSchema = new Schema({
  orderId: {
    type: String,
    // type: SchemaType.ObjectId,
    // ref: "orders",
    required: true,
  },
  productId: {
    type: String,
    // type: SchemaType.ObjectId,
    // ref: "products",
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

export default OrderProductSchema;
