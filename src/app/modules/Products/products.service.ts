import { TProducts } from "./products.interface";
import ProductModel from "./products.model";

const createProductsIntoDB = async (payload: TProducts) => {
  const result = await ProductModel.create(payload);
  return result;
};

export const ProductsServices = {
  createProductsIntoDB,
};
