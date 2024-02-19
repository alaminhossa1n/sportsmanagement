import { NextFunction, Request, Response } from "express";
import { ProductsServices } from "./products.service";

//create product
const createProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ProductsServices.createProductsIntoDB(req.body);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Product created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//delete product
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await ProductsServices.deleteProductFromDB(id);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Product Deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const ProductController = {
  createProducts,
  deleteProduct,
};
