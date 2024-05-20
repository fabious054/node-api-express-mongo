import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String, //mongoose.Schema.Types.String
        required: true
    },
    nacionality: {
        type: String, //mongoose.Schema.Types.String
    },
},{versionKey: false});

const Author = mongoose.model("authors", authorSchema);
export {Author, authorSchema};