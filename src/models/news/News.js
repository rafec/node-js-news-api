import { Sequelize } from "sequelize";
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
    authorId: {
        type: Sequelize.INTEGER,
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