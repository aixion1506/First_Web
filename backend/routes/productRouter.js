import express from "express";
import { addProduct } from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/add", addProduct);

export default productRouter;
