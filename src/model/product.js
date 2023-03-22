import { number } from "joi";
import mongoose from "mongoose";
const productShema = mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  status: Boolean,
  quantity: Number,
});
export default mongoose.model("products", productShema);
