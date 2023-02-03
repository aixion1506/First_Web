import { addOrderService, getOrderService } from "../services/orderService";

export const addOrder = async (req, res, next) => {
  try {
    const {
      orderNumber,
      userId,
      orderTotalPrice,
      consignee,
      address,
      phoneNumber,
    } = req.body;

    const newOrder = await addOrderService({
      orderNumber,
      userId,
      orderTotalPrice,
      consignee,
      address,
      phoneNumber,
    });
    res.status(201).json(newOrder);
  } catch (err) {
    next(err);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const orderList = await getOrderService();
    res.status(200).json(orderList);
  } catch (err) {
    next(err);
  }
};
