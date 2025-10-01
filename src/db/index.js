import mongoose from "mongoose";

export const connectDb = async () => {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
        console.log("MongoDB uri is not provided!");
    } else {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB !!');
    }
}

