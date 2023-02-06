import { Order } from "../models";

class OrderService {
  constructor(orderModel) {
    this.orderModel = orderModel;
  }
  async addOrder(orderInfo) {
    const createdNewOrder = await this.orderModel.create(orderInfo);

    return createdNewOrder;
  }

  async getOrderAdmin() {
    const orderList = await this.orderModel.find();
    return orderList;
  }

  async getOrderUser(userId) {
    const orderList = await this.orderModel.find({ userId });
    return orderList;
  }

  async setOrder(orderNumber, changeInfo) {
    const changedOrder = await this.orderModel.updateOne(
      { orderNumber },
      { $set: changeInfo },
    );

    return changedOrder;
  }

  async deleteOrder(orderNumber) {
    const orderDeleted = await this.orderModel.deleteOne({ orderNumber });

    return orderDeleted;
  }
}

const orderService = new OrderService(Order);

export default orderService;
