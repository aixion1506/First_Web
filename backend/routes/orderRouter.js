import express from "express";
import {
  addOrder,
  getOrderAdmin,
  getOrderUser,
  setOrder,
  deleteOrder,
} from "../controllers/orderController";

const orderRouter = express.Router();

orderRouter.post("/add", addOrder);
orderRouter.get("/orderlist/admin", getOrderAdmin);
orderRouter.get("/orderlist/user", getOrderUser);
orderRouter.patch("/orderlist/change", setOrder);
orderRouter.delete("/delete", deleteOrder);

export default orderRouter;
