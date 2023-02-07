import { orderProductService } from "../services/orderProductService";

class OrderProductController {
  async addOrderProduct(req, res, next) {
    try {
      const { orderId, productId, productQuantity } = req.body;

      const newOrderProduct = await orderProductService.addOrderProduct({
        orderId,
        productId,
        productQuantity,
      });
      res.status(201).json(newOrderProduct);
    } catch (err) {
      next(err);
    }
  }

  async getOrderProduct(req, res, next) {
    try {
      const { orderId } = req.params;
      const productList = await orderProductService.getOrderProduct(orderId);
      res.status(200).json(productList);
    } catch (err) {
      next(err);
    }
  }

  async deleteOrderProduct(req, res, next) {
    try {
      const { orderId } = req.params;
      const deleteResult = await orderProductService.deleteOrderProduct(
        orderId,
      );

      res.status(200).json(deleteResult);
    } catch (err) {
      next(err);
    }
  }
}

const orderProductController = new OrderProductController();

export { orderProductController };
