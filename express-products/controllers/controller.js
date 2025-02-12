import products from "../models/products.js";

const home = (req, res) => {
    const categories = [...new Set(products.map(product => product.category))];
    res.status(200).render("home", {
        categories
    });
}

const productsAll = (req, res) => {
    res.status(200).render("all-products", {
        products: products
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

const productsID = (req, res) => {
    // something
    const productID = parseInt(req.params.id);

    const idFiltered = products.filter(product => product.id === productID);

    res.status(200).render("product-detail", {
        id: productID,
        products: idFiltered
    });
}

export default {
    home,
    productsAll,
    productsCategory,
    productsID
}