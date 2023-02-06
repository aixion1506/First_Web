import orderService from "../services/orderService";

class OrderController {
  async addOrder(req, res, next) {
    try {
      const { orderNumber, userId, consignee, address, phoneNumber } = req.body;

      const newOrder = await orderService.addOrder({
        orderNumber,
        userId,
        consignee,
        address,
        phoneNumber,
      });
      res.status(201).json(newOrder);
    } catch (err) {
      next(err);
    }
  }

  async getOrderAdmin(req, res, next) {
    try {
      const orderList = await orderService.getOrderAdmin();
      res.status(200).json(orderList);
    } catch (err) {
      next(err);
    }
  }

  async getOrderUser(req, res, next) {
    try {
      const { userId } = req.body;
      const orderList = await orderService.getOrderUser(userId);
      res.status(200).json(orderList);
    } catch (err) {
      next(err);
    }
  }

  async setOrder(req, res, next) {
    try {
      const { orderNumber } = req.params;
      const { status, consignee, address, phoneNumber } = req.body;
      const changeInfo = {
        ...(status && { status }),
        ...(consignee && { consignee }),
        ...(address && { address }),
        ...(phoneNumber && { phoneNumber }),
      };

      const changedOrder = await orderService.setOrder(orderNumber, changeInfo);
      res.status(200).json(changedOrder);
    } catch (err) {
      next(err);
    }
  }

  async deleteOrder(req, res, next) {
    try {
      const { orderNumber } = req.params;
      const deleteResult = await orderService.deleteOrder(orderNumber);

      res.status(200).json(deleteResult);
    } catch (err) {
      next(err);
    }
  }
}

const orderController = new OrderController();

export default orderController;
