import { TSoldProducts } from "./SoldProducts.interface";
import soldProductsModel from "./SoldProducts.model";

const addSellProductIntoDB = async (payload: TSoldProducts) => {
  const result = await soldProductsModel.create(payload);
  return result;
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
