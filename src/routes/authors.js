import express from "express";
import authorsController from "../controllers/authors/authorsController";

const routes = express.Router();

routes.get('/', authorsController.findAllAuthors);
routes.post('/', authorsController.addAuthor);
routes.get('/:id', authorsController.findAuthor);
routes.put('/:id', authorsController.updateAuthor);
routes.delete('/:id', authorsController.deleteAuthor);

export default routes;