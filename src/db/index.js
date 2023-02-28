import dotenv from "dotenv"
dotenv.config()

import mongoose from "mongoose";

const MONGO_URL =
  process.env.MONGO_URI

mongoose.set("strictQuery", false);

try {
  const conn = await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`Connected to: ${conn.connection.host}`)
} catch (err) {
  console.error(err);
  process.exit(1);
}