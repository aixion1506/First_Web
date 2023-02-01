import mongoose from "mongoose";
import UserSchema from "./schemas/user";
import ProductSchema from "./schemas/product";

const User = mongoose.model("User", UserSchema);
const Product = mongoose.model("Product", ProductSchema, "products");

export { User, Product };
