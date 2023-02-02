import express from "express";
import { addCategory } from "../controllers/categoryController";

const categoryRouter = express.Router();

categoryRouter.post("/add", addCategory);

export default categoryRouter;
