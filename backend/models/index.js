import mongoose from "mongoose";
import UserSchema from "./schemas/user";
import OrderSchema from "./schemas/order";

export const User = mongoose.model("User", UserSchema);
export const Order = mongoose.model("Order", OrderSchema);
