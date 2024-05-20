import { Author } from "../models/Author.js";

class AuthorsController{
    static async getAuthors(req, res){
        try{
            const authorList = await Author.find({});
            res.status(200).json(authorList);
        } catch(err){
            res.status(500).json({
                message: 'Error getting books',
                error: err.message
            });
        }
    };

    static async getAuthorsById(req, res){
        try{
            const id = req.params.id;
            const author = await Author.findById(id);
            res.status(200).json(author);
        } catch(err){
            res.status(500).json({
                message: 'Error getting author by id',
                error: err.message
            });
        }
    }

    static async createAuthor(req, res){
        try{
            const newAuthor = await Author.create(req.body);
            res.status(201).json({
                message: 'Author created successfully',
                data: newAuthor
            });
        }
        catch(err){
            res.status(500).json({
                message: 'Error creating author',
                error: err.message
            });
        }
    };

    static async updateAuthor(req, res){
        try{
            const id = req.params.id;
            const updatedAuthor = await Author.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: 'Author updated successfully',
                data: updatedAuthor
            });
        } catch(err){
            res.status(500).json({
                message: 'Error updating author',
                error: err.message
            });
        }
    }

    static async deleteAuthor(req, res){
        try{
            const id = req.params.id;
            await Author.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Author deleted successfully'
            });
        } catch(err){
            res.status(500).json({
                message: 'Error deleting Author',
                error: err.message
            });
        }
    }
}

export default AuthorsController;