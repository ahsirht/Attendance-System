import dns from "dns";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
    try {
        console.log("Mongo URI exists:", !!process.env.MONGO_URI);
        console.log("Mongo URI length:", process.env.MONGO_URI?.length);

        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

export default connectDB;