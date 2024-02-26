import { Schema, model } from "mongoose";
import { TSoldProducts } from "./SoldProducts.interface";

const soldProductsSchema = new Schema<TSoldProducts>({
  productID: { type: String, required: true },
  buyerName: { type: String, required: true },
  dateOfSell: { type: Date },
  quantity: { type: Number, required: true },
});

const soldProductsModel = model<TSoldProducts>(
  "soldProducts",
  soldProductsSchema
);

export default soldProductsModel;
