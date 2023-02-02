import mongoose from "mongoose";
import UserSchema from "./schemas/user";
import ProductSchema from "./schemas/product";

export const User = mongoose.model("User", UserSchema);
export const Product = mongoose.model("Product", ProductSchema);
