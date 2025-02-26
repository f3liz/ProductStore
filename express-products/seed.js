import products from "./models/products.js";
import Product from "./models/productSchema.js";

await Product.destroy({where: {}});
await Product.bulkCreate(products);
console.log("Done seeding");
