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

//get products
const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductsServices.getProductsFromDB(req.query);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Product Retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//get product by id
const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const result = await ProductsServices.getProductByIdFromDB(id);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Product Retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await ProductsServices.updateProductFromDB(id, req.body);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Product Updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const ProductController = {
  createProducts,
  deleteProduct,
  updateProduct,
  getProducts,
  getProductById
};
