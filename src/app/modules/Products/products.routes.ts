import express from "express";
import { ProductController } from "./products.controller";

const router = express.Router();

router.post("/create-product", ProductController.createProducts);
router.delete("/delete-product/:id", ProductController.deleteProduct);
router.patch("/update-product/:id", ProductController.updateProduct);
router.get("/", ProductController.getProducts);

export const ProductsRoutes = router;
