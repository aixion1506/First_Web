import express from "express";
import orderRouter from "./orderRouter";
import orderProductRouter from "./orderProductRouter";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

export { indexRouter, orderRouter, orderProductRouter };
