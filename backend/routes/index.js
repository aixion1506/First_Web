import express from "express";
import productRouter from "./productRouter";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

export { indexRouter, productRouter };
