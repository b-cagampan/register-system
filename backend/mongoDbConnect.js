
import dontenv from "dotenv"
import mongoose from "mongoose";

const client = async () => {
    //get URI from the .env
    const uri = process.env.MONGO_DB_URI;

    // Connect MongoDB to the server
    try
    {
        await mongoose.connect(uri);
        console.log("Mongo DB Successfully Connected")
    } catch (err) {
        console.log("Connection error: ", err.message);
    }
}

export default client;