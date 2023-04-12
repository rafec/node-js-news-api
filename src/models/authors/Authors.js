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
    },
    isIndependent: {
        type: Sequelize.BOOLEAN
    }
});