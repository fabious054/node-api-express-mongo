import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
    },
    title: {
        type: String, //mongoose.Schema.Types.String
        required: true
    },
    editor: {
        type: String, //mongoose.Schema.Types.String
    },
    price : {
        type: Number, //mongoose.Schema.Types.Number
    },
    pages: {
        type: Number, //mongoose.Schema.Types.Number
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors"
    }
},{versionKey: false});

const Book = mongoose.model("books", bookSchema);
export default Book;