import Author from "./authors/Authors";
import News from "./news/News";

Author.hasMany(News);

News.belongsTo(Author, {
    onDelete: "CASCADE",
    foreignKey: {
        name: 'author_id'
    }
});

export { Author, News };