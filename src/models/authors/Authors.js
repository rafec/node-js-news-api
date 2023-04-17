import { Sequelize } from "sequelize";
import db from "../../database/database.js";

export default db.define('author', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isIndependent: {
        type: Sequelize.BOOLEAN
    },
    email: {
        type: Sequelize.STRING(155),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
});