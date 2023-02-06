import express from "express";
import orderController from "../controllers/orderController";

const orderRouter = express.Router();

orderRouter.post("/", orderController.addOrder);
orderRouter.get("/", orderController.getOrderAdmin);
orderRouter.get("/user", orderController.getOrderUser);
orderRouter.patch("/:orderNumber", orderController.setOrder);
orderRouter.delete("/:orderNumber", orderController.deleteOrder);

export default orderRouter;
