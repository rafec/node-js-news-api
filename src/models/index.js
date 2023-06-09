import Author from "./authors/Authors.js";
import News from "./news/News.js";

Author.hasMany(News, {
    foreignKey: {
        name: 'author_id'
    }
});

News.belongsTo(Author, {
    onDelete: "CASCADE",
    foreignKey: {
        name: 'author_id'
    }
});

export { Author, News };