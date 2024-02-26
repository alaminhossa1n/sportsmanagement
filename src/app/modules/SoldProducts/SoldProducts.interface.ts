import mongoose from "mongoose";

export type TSoldProducts = {
  productID: mongoose.ObjectId;
  buyerName: string;
  dateOfSell: Date;
  quantity: number;
};

