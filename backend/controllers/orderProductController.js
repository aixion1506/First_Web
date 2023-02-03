import {
  addOrderProductService,
  getOrderProductService,
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
    res.json("getTest");
  } catch (err) {
    next(err);
  }
};
