import mongoose from "mongoose";

const url = process.env.MONGODB_URI as string;

if (!url) {
  throw new Error("Please provide MONGODB_URI in the environment variables");
}

export async function connectToMongoDB() {
  try {
    await mongoose.connect(url);
    console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
}
