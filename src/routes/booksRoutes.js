import express from 'express';
import BookController from '../controllers/bookController.js';

const routes = express.Router();

routes.get('/books/', BookController.getBooks);

export default routes;