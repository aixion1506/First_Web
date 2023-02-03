import express from "express";
import {
  addProduct,
  getProducts,
  getProductsByCategory,
  getProductData,
  deleteProduct,
} from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/add", addProduct);
productRouter.get("/", getProducts);
productRouter.get("/category/:categoryTitle", getProductsByCategory);
productRouter.get("/:productTitle", getProductData);
productRouter.delete("/:productTitle", deleteProduct);

export default productRouter;
