import express from "express";
import { orderProductController } from "../controllers/orderProductController";

const orderProductRouter = express.Router();

orderProductRouter.post(
  "/order/product",
  orderProductController.addOrderProduct,
);
orderProductRouter.get(
  "/order/product/:orderId",
  orderProductController.getOrderProduct,
);
orderProductRouter.delete(
  "/order/product/:orderId",
  orderProductController.deleteOrderProduct,
);

export default orderProductRouter;
