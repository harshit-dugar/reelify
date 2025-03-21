import mongoose, {Connection} from "mongoose";

const MONGODB_URI = process.env.MONGODM_URI!;

if(!MONGODB_URI) {
    throw new Error("MongoDB connection string is required");
}

let cached: Connection | null = null;

export async function dbConnect() {
    if(cached) {
        return cached;
    }
    // If no connection is cached, create a new connection
    if(!mongoose.connections[0].readyState) {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB new connection");        
    }
    // Cache the connection
    cached = mongoose.connections[0];
    console.log("Connected to MongoDB cached");
    
    return cached;
}