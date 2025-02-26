import Product from "../models/productSchema.js";
import chalk from "chalk";

async function createProduct(data) {
    try {
        const product = await Product.create({
            name: data.name,
            category: data.category,
            price: data.price,
            description: data.description,
            features: data.features,
            image: data.image
        });

        return product;
    } catch (err) {
        console.log(`Couldn't create product: ${chalk.red(err)}`);
    }
}

async function getAllProducts() {
    try {
        const products = await Product.findAll();
        return products;
    } catch (err) {
        console.log(`Couldn't get all products: ${chalk.red(err)}`);
    }
}

async function getProductById(id) {
    try {
        const product = await Product.findByPk(id);
        return product;
    } catch (err) {
        console.log(`Couldn't get product with id ${id}: ${chalk.red(err)}`);
    }
}

async function updateProduct(id, update) {
    try {
        const product = await Product.update(update, 
            {
                where: { id: id }
            }
        )
    } catch (err) {
        console.log(`Couldn't update product: ${chalk.red(err)}`);
    }
}

async function deleteProduct(id) {
    try {
        await Product.destroy({
            where: {
                id: id
            }
        })
    } catch (err) {
        console.log(`Couldn't delete product: ${chalk.red(err)}`);
    }
}

export default {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}