import express from 'express';

const app = express();
app.use(express.json());

const books = [
    {
        id: 1,
        title: "livro 1",
    },
    {
        id: 2,
        title: "livro 2",
    },
];

function findBookById(id) {
    return books.findIndex(livro => livro.id == Number(id));
}

app.get('/', (req, res) => {
    res.status(200).send('Course express api');
});

app.get('/books/', (req, res) => {
    res.status(200).json(books);
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