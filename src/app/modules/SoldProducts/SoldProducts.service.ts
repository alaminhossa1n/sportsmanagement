import { startSession } from "mongoose";
import AppError from "../../errors/AppError";
import ProductModel from "../Products/products.model";
import { TSoldProducts } from "./SoldProducts.interface";
import soldProductsModel from "./SoldProducts.model";

const addSellProductIntoDB = async (payload: TSoldProducts) => {
  const session = await startSession();
  session.startTransaction();

  try {
    const isProductExist = await ProductModel.findOne({
      _id: payload.productID,
    }).session(session);

    if (!isProductExist) {
      throw new AppError(404, "Product does not exist");
    }

    const availableQuantity = isProductExist.quantity;

    if (payload.quantity > availableQuantity) {
      throw new AppError(
        500,
        `Sorry, only ${availableQuantity} products available`
      );
    }

    await ProductModel.updateOne(
      { _id: isProductExist._id },
      { $inc: { quantity: -payload.quantity} }
    ).session(session);

    const result = await soldProductsModel.create([payload], { session });

    await session.commitTransaction();
    session.endSession();

    return result;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    // Handle errors appropriately, e.g., log or throw a custom error
    console.error("Error in addSellProductIntoDB:", error);

    throw new AppError(500, "Internal server error");
  }
};

const getSellsFromDB = async ({ query }) => {
  const dateFilter: any = {};

  switch (query) {
    case "daily":
      dateFilter.dateOfSell = {
        $gte: new Date(new Date().setHours(0, 0, 0, 0)),
      };
      break;
    case "weekly":
      dateFilter.dateOfSell = {
        $gte: new Date(new Date() - 7 * 24 * 60 * 60 * 1000),
      }; // Assuming a week is 7 days
      break;
    case "monthly":
      dateFilter.dateOfSell = {
        $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
      };
      break;
    case "yearly":
      dateFilter.dateOfSell = {
        $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
      };

    default:
      break;
  }

  const result = await soldProductsModel.find({
    dateOfSell: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) },
  });
  return result;
};

export const soldProductsService = {
  addSellProductIntoDB,
  getSellsFromDB,
};
