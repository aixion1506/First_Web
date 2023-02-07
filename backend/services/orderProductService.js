import { OrderProduct } from "../models";

class OrderProductService {
  constructor(orderProductModel) {
    this.orderProductModel = orderProductModel;
  }

  async addOrderProduct(orderProductInfo) {
    const createdNewOrderProduct = await this.orderProductModel.create(
      orderProductInfo,
    );

    return createdNewOrderProduct;
  }

  async getOrderProduct(orderId) {
    const orderProductList = await this.orderProductModel.find({ orderId });
    return orderProductList;
  }

  async deleteOrderProduct(orderId) {
    const orderProductDeleted = await this.orderProductModel.deleteMany({
      orderId,
    });

    return orderProductDeleted;
  }
}

const orderProductService = new OrderProductService(OrderProduct);

export { orderProductService };
