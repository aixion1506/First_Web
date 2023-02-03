import express from "express";
import {
  addOrderProduct,
  getOrderProduct,
} from "../controllers/orderProductController";

const orderProductRouter = express.Router();

orderProductRouter.post("/add", addOrderProduct);
orderProductRouter.get("/get", getOrderProduct);

export default orderProductRouter;
