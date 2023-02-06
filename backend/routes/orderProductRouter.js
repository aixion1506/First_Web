import express from "express";
import orderProductController from "../controllers/orderProductController";

const orderProductRouter = express.Router();

orderProductRouter.post("/", orderProductController.addOrderProduct);
orderProductRouter.get("/:orderId", orderProductController.getOrderProduct);
orderProductRouter.delete(
  "/:orderId",
  orderProductController.deleteOrderProduct,
);

export default orderProductRouter;
