import { Order } from "../models";

export const addOrderService = async orderInfo => {
  const createdNewOrder = await Order.create(orderInfo);

  return createdNewOrder;
};

export const getOrderAdminService = async () => {
  const orderList = await Order.find();
  return orderList;
};

export const getOrderUserService = async userId => {
  const orderList = await Order.find({ userId });
  return orderList;
};

export const setOrderService = async (orderId, changeInfo) => {
  const changedOrder = await Order.update(
    { _id: orderId },
    { $set: changeInfo },
  );

  return changedOrder;
};
