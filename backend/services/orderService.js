import { Order } from "../models";

export const addOrderService = async orderInfo => {
  const createdNewOrder = await Order.create(orderInfo);

  return createdNewOrder;
};

export const getOrderService = async () => {
  const orderList = await Order.find({});
  return orderList;
};
