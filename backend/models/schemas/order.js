import { Schema, SchemaType } from "mongoose";

const OrderSchema = new Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  orderDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  userId: {
    type: String,
    // type: Schema.Types.ObjectId,
    // ref: "users",
    required: true,
  },
  orderTotalPrice: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    default: "결제 완료",
    required: true,
  },
  consignee: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
});

export default OrderSchema;
