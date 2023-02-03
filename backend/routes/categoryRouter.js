import express from "express";
import {
  addCategory,
  getCategories,
  // setCategory,
  deleteCategory,
} from "../controllers/categoryController";

const categoryRouter = express.Router();

categoryRouter.post("/", addCategory);
categoryRouter.get("/", getCategories);
// categoryRouter.patch("/:categoryTitle", setCategory);
categoryRouter.delete("/:categoryTitle", deleteCategory);

export default categoryRouter;
