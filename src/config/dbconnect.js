import mongoose from 'mongoose';

async function connectDb() {
        mongoose.connect(process.env.DB_CONNECTION_STRING);
        return mongoose.connection;
};

export default connectDb;


// mongodb+srv://fabext:<password>@library.ae78i7b.mongodb.net/?retryWrites=true&w=majority&appName=library