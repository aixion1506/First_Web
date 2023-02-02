import mongoose from "mongoose";
import UserSchema from "./schemas/user";
import ProductSchema from "./schemas/product";
import CategorySchema from "./schemas/category";

export const User = mongoose.model("User", UserSchema);
export const Product = mongoose.model("Product", ProductSchema);
export const Category = mongoose.model("Category", CategorySchema);
