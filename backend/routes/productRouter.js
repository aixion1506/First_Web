import express from "express";
import { productController } from "../controllers";

const productRouter = express.Router();

productRouter.post("/add", productController.addProduct);
productRouter.get("/", productController.getProducts);
productRouter.get(
  "/category/:categoryTitle",
  productController.getProductsByCategory,
);
productRouter.get("/:productTitle", productController.getProduct);
productRouter.delete("/:productTitle", productController.deleteProduct);

export default productRouter;
