import { NextFunction, Request, Response } from "express";
import { ProductsServices } from "./products.service";

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

export const ProductController = {
  createProducts,
};
