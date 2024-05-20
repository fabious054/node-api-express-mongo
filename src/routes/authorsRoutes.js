import express from 'express';
import AuthorsController from '../controllers/authorsController.js';

const routes = express.Router();

routes.get('/author/', AuthorsController.getAuthors);
routes.get('/author/:id', AuthorsController.getAuthorsById);
routes.post('/author/', AuthorsController.createAuthor);
routes.put('/author/:id', AuthorsController.updateAuthor);
routes.delete('/author/:id', AuthorsController.deleteAuthor);

export default routes;