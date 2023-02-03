import express from "express";
import { addCategory, getCategories } from "../controllers/categoryController";

const categoryRouter = express.Router();

categoryRouter.post("/", addCategory);
categoryRouter.get("/", getCategories);

export default categoryRouter;
