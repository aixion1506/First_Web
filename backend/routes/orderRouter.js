import express from "express";
import { addOrder, getOrder } from "../controllers/orderController";

const orderRouter = express.Router();

orderRouter.post("/add", addOrder);
orderRouter.get("/get", getOrder);

export default orderRouter;
