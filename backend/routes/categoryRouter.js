import express from "express";
import { categoryController } from "../controllers/categoryController";

const categoryRouter = express.Router();

categoryRouter.post("/", categoryController.addCategory);
categoryRouter.get("/", categoryController.getCategories);
// categoryRouter.patch("/:categoryTitle", setCategory);
categoryRouter.delete("/:categoryTitle", categoryController.deleteCategory);

export default categoryRouter;
