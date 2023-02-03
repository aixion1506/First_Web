import mongoose from "mongoose";
import UserSchema from "./schemas/user";
import ProductSchema from "./schemas/product";
import CategorySchema from "./schemas/category";
import OrderSchema from "./schemas/order";
import OrderProductSchema from "./schemas/orderProduct";

export const User = mongoose.model("User", UserSchema);
export const Product = mongoose.model("Product", ProductSchema);
export const Category = mongoose.model("Category", CategorySchema);
export const Order = mongoose.model("Order", OrderSchema);
export const OrderProduct = mongoose.model("OrderProduct", OrderProductSchema);
