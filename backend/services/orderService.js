import { Order } from "../models";

export const addOrderService = async orderNumber => {
  const createdNewOrder = await Order.create(orderNumber);

  return createdNewOrder;
};

export const getOrderService = async () => {
  const text = { text: "get text" };
  return text;
};
