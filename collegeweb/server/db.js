import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("database connection established");
  } catch (err) {
    console.log("error connecting to database: " + err);
  }
};
export default connectToMongo;
