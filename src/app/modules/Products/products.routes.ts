import express from "express";
import { ProductController } from "./products.controller";

const router = express.Router();

router.post("/create-product", ProductController.createProducts);
router.delete("/delete-product/:id", ProductController.deleteProduct);
router.delete("/delete-products", ProductController.deleteProducts);
router.patch("/update-product/:id", ProductController.updateProduct);
router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);

export const ProductsRoutes = router;
