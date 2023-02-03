import { OrderProduct } from "../models";

export const addOrderProductService = async orderProductInfo => {
  const createdNewOrderProduct = await OrderProduct.create(orderProductInfo);

  return createdNewOrderProduct;
};

export const getOrderProductService = async () => {
  const text = { text: "get text" };
  return text;
};
