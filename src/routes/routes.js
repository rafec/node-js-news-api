import express from "express";
import authorsController from "../controllers/authors/authorsController.js"
import newsController from "../controllers/news/newsController.js";

const routes = express.Router();

routes.get('/health', (request, response) => {
    response.status(200).json({message: 'API working'});
});

routes.get('/authors', authorsController.findAllAuthors);
routes.post('/authors', authorsController.addAuthor);
routes.get('/authors/:id', authorsController.findAuthor);
routes.put('/authors/:id', authorsController.updateAuthor);
routes.delete('/authors/:id', authorsController.deleteAuthor);

routes.get('/news', newsController.findAllNews);
routes.post('/news', newsController.addNews);
routes.get('/news/:id', newsController.findNews);
routes.put('/news/:id', newsController.updateNews);
routes.delete('/news/:id', newsController.deleteNews);

export default routes;