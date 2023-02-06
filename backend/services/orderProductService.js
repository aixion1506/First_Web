import { OrderProduct } from "../models";

export const addOrderProductService = async orderProductInfo => {
  const createdNewOrderProduct = await OrderProduct.create(orderProductInfo);

  return createdNewOrderProduct;
};

export const getOrderProductService = async orderId => {
  const orderProductList = await OrderProduct.find({ orderId });
  return orderProductList;
};

export const setOrderProductService = async (orderProductId, changeInfo) => {
  const changedOrderProduct = await OrderProduct.updateOne(
    { orderProductId },
    { $set: changeInfo },
  );

  return changedOrderProduct;
};

export const deleteOrderProductService = async orderProductId => {
  const orderProductDeleted = await OrderProduct.deleteOne({ orderProductId });

  return orderProductDeleted;
};
