import { SportsItemFilters, TProducts } from "./products.interface";
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

const deleteProductsFromDB = async (ids: string) => {
  const result = await ProductModel.deleteMany({ _id: { $in: ids } });
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
const getProductsFromDB = async (queryParams: SportsItemFilters) => {
  try {
    let filter: any = {};

    // Filter by Sport name (case-insensitive)
    if (queryParams.name) {
      filter.name = { $regex: new RegExp(`${queryParams.name}`, "i") };
  }
    // Filter by Sport Type
    if (queryParams.sportType) {
      filter.sportType = { $regex: new RegExp(`${queryParams.sportType}`, "i") };
    }

    // Filter by Brand
    if (queryParams.brand) {
      filter.brand = { $regex: new RegExp(queryParams.brand, "i") };
    }

    // Filter by Size
    if (queryParams.size) {
      filter.size = queryParams.size;
    }

    // Filter by Price Range
    if (queryParams.minPrice || queryParams.maxPrice) {
      filter.price = {};
      if (queryParams.minPrice) filter.price.$gte = queryParams.minPrice;
      if (queryParams.maxPrice) filter.price.$lte = queryParams.maxPrice;
    }

    // Filter by Material
    if (queryParams.material) {
      filter.material = queryParams.material;
    }

    // Filter by Color
    if (queryParams.color) {
      filter.color = queryParams.color;
    }

    // Filter by Condition
    if (queryParams.condition) {
      filter.condition = queryParams.condition;
    }
    const result = await ProductModel.find(filter);

    return {
      success: true,
      statusCode: 200,
      message: "Products retrieved successfully",
      data: result,
    };
  } catch (error) {
    console.error("Error in getProductsFromDB:", error);
    return {
      success: false,
      statusCode: 500,
      message: "Internal server error",
      data: null,
    };
  }
};

const getProductByIdFromDB = async (id: string) => {
  const result = await ProductModel.findById({ _id: id });

  return result;
};

export const ProductsServices = {
  createProductsIntoDB,
  deleteProductFromDB,
  updateProductFromDB,
  getProductsFromDB,
  getProductByIdFromDB,
  deleteProductsFromDB,
};
