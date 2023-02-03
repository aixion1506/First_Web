import mongoose from "mongoose";
import UserSchema from "./schemas/user";
import OrderSchema from "./schemas/order";
import OrderProductSchema from "./schemas/orderProduct";

export const User = mongoose.model("User", UserSchema);
export const Order = mongoose.model("Order", OrderSchema);
export const OrderProduct = mongoose.model("OrderProduct", OrderProductSchema);
