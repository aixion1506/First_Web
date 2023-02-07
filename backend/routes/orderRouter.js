import express from "express";
import orderController from "../controllers/orderController";

const orderRouter = express.Router();

orderRouter.post("/order", orderController.addOrder);
orderRouter.get("/order", orderController.getOrderAdmin);
orderRouter.get("/order/user", orderController.getOrderUser);
orderRouter.patch("/order/:orderNumber", orderController.setOrder);
orderRouter.delete("/order/:orderNumber", orderController.deleteOrder);

export default orderRouter;
