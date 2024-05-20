import Book from "../models/Book.js";

class BookController{
    static async getBooks(req, res){
        const booksList = await Book.find({});
        res.status(200).json(booksList);
    };

    static async createBook(req, res){
        try{
            const newBook = await Book.create(req.body);
            res.status(201).json({
                message: 'Book created successfully',
                data: newBook
            });
        }
        catch(err){
            res.status(500).json({
                message: 'Error creating book',
                error: err.message
            });
        }
    };


}

export default BookController;