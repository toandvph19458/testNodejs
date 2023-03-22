import express from "express";
import mongoose from "mongoose";
import routerProduct from "./router/product";
const app = express();
mongoose.connect("mongodb://localhost:27017/we17301");
app.use(express.json());
app.use("/api", routerProduct);
export const viteNodeApp = app;
