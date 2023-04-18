import express from "express";
import authorsController from "../controllers/authors/authorsController.js";

import verifyToken from "../middlewares/auth/verifyToken.js";
import verifyBodyFieldsError from "../middlewares/validations/bodyValidations.js";
import { body } from "express-validator";

const routes = express.Router();

routes.get('/', authorsController.findAllAuthors);
routes.post('/',
    body('name').isString(),
    body('bio').isString(),
    body('email').isEmail(),
    body('password')
        .isLength({ min: 8 })
        .withMessage('The password must be informed (min 8 characters)'),
    verifyBodyFieldsError,
    authorsController.addAuthor);
routes.get('/:id', verifyToken, authorsController.findAuthor);
routes.put('/:id', verifyToken, authorsController.updateAuthor);
routes.delete('/:id', authorsController.deleteAuthor);

export default routes;