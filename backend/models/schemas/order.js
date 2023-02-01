import { Schema } from "mongoose";

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
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  orderProducts: {
    type: new Schema({
      product: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      productOption: {
        type: String,
      },
      productQuantity: {
        type: Number,
        required: true,
        default: 1,
      },
      productTotalPrice: {
        type: Number,
        required: true,
      },
    }),
  },
  orderTotalPrice: {
    type: Number,
    required: true,
  }
});

export default OrderSchema;
import { Schema } from "mongoose";