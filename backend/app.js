import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import path from "path";
import { userRouter } from "./routes/index";

import { indexRouter, productRouter, categoryRouter } from "./routes";


const app = express();

const dirname = path.resolve();

app.set("port", process.env.PORT || 8001);
// view engine setup
app.set("views", path.join(dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(dirname, "public")));

app.use("/api", userRouter);
app.use("/", indexRouter);
// app.use('/users', usersRouter);

app.use("/products", productRouter);
app.use("/categories", categoryRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

//  DB 만들고 연결할 주소
//

mongoose.connect(
  "mongodb+srv://SJL:LbEKu60xcARZVUK7@cluster0.vzygcr6.mongodb.net/shoppingMall?retryWrites=true&w=majority",
);

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});

export default app;
