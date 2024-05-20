import express from 'express';
import booksRoutes from './booksRoutes.js';
import authorsRoutes from './authorsRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => { res.status(200).send('Welcome to the Bookstore API!') });

    app.use(express.json(), booksRoutes, authorsRoutes);
};

export default routes;