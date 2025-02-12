import express from 'express';
import controller from '../controllers/controller.js';

const { home, productsAll, productsCategory, productsID } = controller;

const router = express.Router();

router.get("/home", home);
router.get("/products/all", productsAll);
router.get("/products/:category", productsCategory);
router.get("/products/product/:id", productsID);

export default router;