import { TProducts } from "./products.interface";
import ProductModel from "./products.model";

//create product
const createProductsIntoDB = async (payload: TProducts) => {
  const result = await ProductModel.create(payload);
  return result;
};

//delete product
const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete({ _id: id });
  return result;
};

export const ProductsServices = {
  createProductsIntoDB,
  deleteProductFromDB,
};
