import express from "express";
import {
  addProduct,
  deleteProduct,
  getAll,
  getOne,
  update,
  updateProduct,
} from "../controller/product";
const router = express.Router();
router.get("/products", getAll);
router.get("/product/:id", getOne);
router.delete("/product/:id", deleteProduct);
router.post("/product", addProduct);
router.get("/product/:id", updateProduct);
export default router;
