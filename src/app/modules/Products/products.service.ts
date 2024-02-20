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

//update product
const updateProductFromDB = async (id: string, payload: Partial<TProducts>) => {
  const result = await ProductModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

//get products
const getProductsFromDB = async (query: Record<string, undefined>) => {
  console.log(query);
  const result = await ProductModel.find({ sportType: "Basketball" });
  return result;
};

export const ProductsServices = {
  createProductsIntoDB,
  deleteProductFromDB,
  updateProductFromDB,
  getProductsFromDB,
};
