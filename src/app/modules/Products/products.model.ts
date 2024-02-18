import { Schema, model } from "mongoose";
import { TProducts } from "./products.interface";

const productSchema = new Schema<TProducts>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: String, required: true },
    sportType: { type: String },
    brandSearch: { type: String },
    size: { type: String },
    material: { type: String },
    color: { type: String },
    condition: { type: String, enum: ["new", "used"] },
    weight: { type: Number },
    style: { type: String },
  },
  {
    timestamps: true,
  }
);

const ProductModel = model<TProducts>("products", productSchema);

export default ProductModel;
