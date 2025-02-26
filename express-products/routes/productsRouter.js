import express from 'express';
import controller from '../controllers/controller.js';

const { home, productsAll, productsCategory, productsID, renderForm, addProduct, deleteAProduct } = controller;

const router = express.Router();

router.get("/home", home);
router.get("/products/all", productsAll);
router.get("/products/:category", productsCategory);
router.get("/products/product/:id", productsID);
router.get("/products/form/add", renderForm);
router.post("/products/form/add", addProduct);
router.get("/products/delete/:id", deleteAProduct); // this was just for me to test, left it in here for now

export default router;