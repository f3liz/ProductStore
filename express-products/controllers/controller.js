import products from "../models/products.js";
import productController from "./productController.js";

const { getAllProducts, getProductById, updateProduct, deleteProduct, createProduct} = productController;

const home = (req, res) => {
    const categories = [...new Set(products.map(product => product.category))];
    
    res.status(200).render("home", {
        categories
    });
}

const productsAll = async (req, res) => {
    const products = await getAllProducts();
    res.status(200).render("all-products", {
        products
    });
}

const productsCategory = (req, res) => {
    // something
    const category = req.params.category;

    const formatCategory = category.charAt(0).toUpperCase() + category.substring(1);

    const productsFiltered = products.filter(product => product.category.toLowerCase() === category.toLowerCase());

    res.status(200).render("category-products", {
        category: formatCategory,
        products: productsFiltered
    });

}

const productsID = async (req, res) => {
    // something
    const productID = parseInt(req.params.id);

    // const idFiltered = products.filter(product => product.id === productID);

    const idFiltered = await getProductById(productID);

    console.log(idFiltered);

    res.status(200).render("product-detail", {
        id: productID,
        products: [idFiltered]
    });
}

const renderForm = (req, res) => {
    res.status(200).render("add-product");
}

const addProduct = async (req, res) => {
    const { name, category, price, description, features, image } = req.body;
    
    const featuresArr = features.split(",").map(features => features);

    const newProduct = await createProduct({
        name, category, price, description, features: featuresArr, image
    });
    res.redirect("/products/all");
}

const deleteAProduct = async (req, res) => {
    const id = parseInt(req.params.id);

    await deleteProduct(id);

    res.redirect("/products/all");
}

export default {
    home,
    productsAll,
    productsCategory,
    productsID,
    renderForm,
    addProduct,
    deleteAProduct
}