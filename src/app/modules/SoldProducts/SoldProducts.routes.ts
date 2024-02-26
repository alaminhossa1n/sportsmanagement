import express from "express";
import { soldProductsController } from "./SoldProducts.controller";

const router = express.Router();

router.post("/add-sell", soldProductsController.sellProduct);
router.get("/get-sells", soldProductsController.getSells);

export const soldRoutes = router;
