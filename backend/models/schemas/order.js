import { Schema } from 'mongoose';

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
    required: true,
  },
  shippingInfo: {
    type: new Schema({
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
    }),
    required: true,
  },
  orderTotalPrice: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    default: '결제 완료',
    required: true,
  },
});

export default OrderSchema;
