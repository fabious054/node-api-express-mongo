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