import {
  addOrderProductService,
  getOrderProductService,
  setOrderProductService,
  deleteOrderProductService,
} from "../services/orderProductService";

export const addOrderProduct = async (req, res, next) => {
  try {
    const { orderId, productId, productQuantity } = req.body;

    const newOrderProduct = await addOrderProductService({
      orderId,
      productId,
      productQuantity,
    });
    res.status(201).json(newOrderProduct);
  } catch (err) {
    next(err);
  }
};

export const getOrderProduct = async (req, res, next) => {
  try {
    const { orderId } = req.body;
    const productList = await getOrderProductService(orderId);
    res.status(200).json(productList);
  } catch (err) {
    next(err);
  }
};

export const setOrderProduct = async (req, res, next) => {
  try {
    const { orderProductId } = req.params;
    const { productQuantity } = req.body;
    const changeInfo = {
      ...(productQuantity && { productQuantity }),
    };
    const changedOrder = await setOrderProductService(
      orderProductId,
      changeInfo,
    );
    res.status(200).json(changedOrder);
  } catch (err) {
    next(err);
  }
};

export const deleteOrderProduct = async (req, res, next) => {
  try {
    const { orderProductId } = req.params;
    const deleteResult = await deleteOrderProductService(orderProductId);

    res.status(200).json(deleteResult);
  } catch (err) {
    next(err);
  }
};
