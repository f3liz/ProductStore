import sequelize from "../db/db.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define('productsSchema', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    features: {
        type: DataTypes.JSON,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

await Product.sync({ alter: true});

export default Product;