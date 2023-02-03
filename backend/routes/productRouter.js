import express from "express";
import {
  addProduct,
  getProducts,
  getProductsByCategory,
  getProductData,
} from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/add", addProduct);
productRouter.get("/", getProducts);
productRouter.get("/category/:categoryTitle", getProductsByCategory);
productRouter.get("/:productTitle", getProductData);

export default productRouter;
