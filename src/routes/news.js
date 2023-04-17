import express from "express";
import newsController from "../controllers/news/newsController";

const routes = express.Router();

routes.get('/', newsController.findAllNews);
routes.post('/', newsController.addNews);
routes.get('/:id', newsController.findNews);
routes.put('/:id', newsController.updateNews);
routes.delete('/:id', newsController.deleteNews);

export default routes;