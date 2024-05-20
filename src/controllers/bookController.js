import Book from "../models/Book.js";
import {Author} from "../models/Author.js";

class BookController{
    static async getBooks(req, res){
        try{
            const booksList = await Book.find().populate('author');

            res.status(200).json(booksList);
        } catch(err){
            res.status(500).json({
                message: 'Error getting books',
                error: err.message
            });
        }
    };

    static async getBookById(req, res){
        try{
            const id = req.params.id;
            const book = await Book.findById(id).populate('author');
            res.status(200).json(book);
        } catch(err){
            res.status(500).json({
                message: 'Error getting book',
                error: err.message
            });
        }
    }

    static async createBook(req, res){
        const newBookReq = req.body;
        try{
            const findedAuthor = await Author.findById(newBookReq.author);
            const book = {...newBookReq, author: {...findedAuthor._doc }};
            const newBook = await Book.create(book);
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

    static async updateBook(req, res){
        try{
            const id = req.params.id;
            const updatedBook = await Book.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: 'Book updated successfully',
                data: updatedBook
            });
        } catch(err){
            res.status(500).json({
                message: 'Error updating book',
                error: err.message
            });
        }
    }

    static async deleteBook(req, res){
        try{
            const id = req.params.id;
            await Book.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Book deleted successfully'
            });
        } catch(err){
            res.status(500).json({
                message: 'Error deleting book',
                error: err.message
            });
        }
    }
}

export default BookController;