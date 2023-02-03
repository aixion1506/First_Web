import {
  addOrderService,
  getOrderAdminService,
  getOrderUserService,
  setOrderService,
} from "../services/orderService";

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

export const getOrderAdmin = async (req, res, next) => {
  try {
    const orderList = await getOrderAdminService();
    res.status(200).json(orderList);
  } catch (err) {
    next(err);
  }
};

export const getOrderUser = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const orderList = await getOrderUserService(userId);
    res.status(200).json(orderList);
  } catch (err) {
    next(err);
  }
};

export const setOrder = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const { orderStatus, consignee, address, phoneNumber } = req.body;
    const changeInfo = {
      ...(orderStatus && { orderStatus }),
      ...(consignee && { consignee }),
      ...(address && { address }),
      ...(phoneNumber && { phoneNumber }),
    };

    const changedOrder = await setOrderService(orderId, changeInfo);
    res.status(200).json(changedOrder);
  } catch (err) {
    next(err);
  }
};
