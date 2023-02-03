import express from "express";
import productRouter from "./productRouter";
import categoryRouter from "./categoryRouter";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

export { indexRouter, productRouter, categoryRouter };

