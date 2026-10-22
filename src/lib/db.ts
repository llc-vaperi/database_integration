import  mongoose  from 'mongoose';

const client = "mongodb+srv://niksonagamer777_db_user:GphyzJMIS4joAoqR@cluster0.xzyubtu.mongodb.net/";

export async function connectToMongoDB() {
  try {
    const connection = await mongoose.connect(client);
    console.log("You successfully connected to MongoDB!");
    return connection
  } catch (err) {
    console.dir(err);
  }
}



