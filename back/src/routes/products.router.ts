import { Router } from "express";
import { getProducts } from "../controllers/product.controller";
import { getProductById } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
