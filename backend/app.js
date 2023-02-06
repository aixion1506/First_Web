import dotenv from "dotenv";
import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import path from "path";
import {
  adminRouter,
  userRouter,
  productRouter,
  categoryRouter,
  orderRouter,
  orderProductRouter,
} from "./routes";
import { errorHandler } from "./middleware";
// 환경변수 사용
dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();

const dirname = path.resolve();
console.log(dirname, "dirname");
app.set("port", process.env.PORT || 8010);
// view engine setup
app.set("views", path.join(dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(dirname, "public")));

app.use("/api", userRouter);
app.use("/admin", adminRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/order", orderRouter);
app.use("/order/product", orderProductRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
//  DB 만들고 연결할 주소
mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`${port}번 포트에서 대기중 🚀`);
});

export default app;
