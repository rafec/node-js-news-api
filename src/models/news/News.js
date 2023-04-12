import { Sequelize } from "sequelize";
import Author from "../authors/Authors.js";
import db from "../../database/database.js";

export default db.define("news", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.ENUM('Sports', 'Police', 'Culinary', 'General'),
        allowNull: false
    },
    author_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: Author,
            key: 'id'
        },
        allowNull: false
    }
},
    {
        tableName: 'news'
    }
);