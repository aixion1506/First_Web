import express from "express";
import {
  addOrderProduct,
  getOrderProduct,
  setOrderProduct,
  deleteOrderProduct,
} from "../controllers/orderProductController";

const orderProductRouter = express.Router();

orderProductRouter.post("/add", addOrderProduct);
orderProductRouter.get("/get", getOrderProduct);
orderProductRouter.patch("/change", setOrderProduct);
orderProductRouter.delete("/delete", deleteOrderProduct);

export default orderProductRouter;
