import mongoose from "mongoose";


export async function connectToDB() {
    try {
        const url = process.env.MONGO_URI;
        await mongoose.connect(url);
        const connection = mongoose.connection;

        connection.once("connected", () => {
            console.log("Connected to the database");
        })

        connection.on("error", (err) => {
            console.log("Error connecting to the database", err);
        })
        
    } catch (error) {
        console.log("Something went wrong while connecting to the database", error);
    }
}