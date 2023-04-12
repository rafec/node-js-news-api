import express from "express";
import authorsController from "../controllers/authors/authorsController.js"

const routes = express.Router();

routes.get('/health', (request, response) => {
    response.status(200).json({message: 'API working'});
});

routes.get('/authors', authorsController.findAllAuthors);
routes.post('/authors', authorsController.addAuthor);
routes.get('/authors/:id', authorsController.findAuthor);
routes.put('/authors/:id', authorsController.updateAuthor);
routes.delete('/authors/:id', authorsController.deleteAuthor);

export default routes;