import express from 'express';
import connectDb from "./config/dbconnect.js";
import routes from "./routes/index.js";


const db = await connectDb();
db.on("error", (error) => {console.log(error)});

db.once("open", () => {
    console.log('Connected to MongoDB');
});

const app = express();
routes(app);

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const idxBook = findBookById(id);
    if (idxBook === -1) {
        res.status(404).send('Sorry, book not found! :(');
    }
    res.status(200).json(books[idxBook]);
});

// app.post('/books/', (req, res) => {
//     books.push(req.body);
    
// });

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