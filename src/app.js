import express from 'express';
import connectDb from "./config/dbconnect.js";
import Book from './models/Book.js';

const db = await connectDb();
db.on("error", (error) => {console.log(error)});

db.once("open", () => {
    console.log('Connected to MongoDB');
});

const app = express();
app.use(express.json());



app.get('/', (req, res) => {
    res.status(200).send('Course express api');
});

app.get('/test/', async (req, res) => {
    res.status(200).json({message: 'Test route', status: 200,env: process.env.DB_CONNECTION_STRING});
});

app.get('/books/', async (req, res) => {
    const booksList = await Book.find({});
    res.status(200).json(booksList);
});

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const idxBook = findBookById(id);
    if (idxBook === -1) {
        res.status(404).send('Sorry, book not found! :(');
    }
    res.status(200).json(books[idxBook]);
});

app.post('/books/', (req, res) => {
    books.push(req.body);
    res.status(201).send('Book added successfully!');
});

app.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const idxBook = findBookById(id);
    if (idxBook === -1) {
        res.status(404).send('Sorry, book not found! :(');
    }
    books[idxBook].title = req.body.title;
    res.status(200).send('Book updated successfully!');
});

app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    const idxBook = findBookById(id);
    if (idxBook === -1) {
        res.status(404).send('Sorry, book not found! :(');
    }
    books.splice(idxBook, 1);
    res.status(200).send('Book deleted successfully!');
}); 


export default app;