import mongoose from 'mongoose';

async function connectDb() {
        await mongoose.connect('mongodb+srv://fabext:FabioAbreu1!@librarycluster.kou5wjr.mongodb.net/?retryWrites=true&w=majority&appName=libraryCluster');
        console.log('Successfully connected to MongoDB');
        return mongoose.connection;
};

export default connectDb;


// mongodb+srv://fabext:FabioAbreu1!@librarycluster.kou5wjr.mongodb.net/?retryWrites=true&w=majority&appName=libraryCluster