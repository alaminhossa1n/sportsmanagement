import { NextFunction, Request, Response } from "express";
import { soldProductsService } from "./SoldProducts.service";

const sellProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const buyerInfo = req.body;
    buyerInfo.dateOfSell = new Date();

    const result = await soldProductsService.addSellProductIntoDB(buyerInfo);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Sell created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSells = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query= req.query;

    const result = await soldProductsService.getSellsFromDB(query);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Sell Retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const soldProductsController = {
  sellProduct,
  getSells,
};
