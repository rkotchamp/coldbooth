import "dotenv/config";
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

if (!process.env.MONGO_DB) {
  throw new Error(
    "Please define the MONGO_DB environment variable inside .env"
  );
}

const client = new MongoClient(process.env.MONGODB_URI);
let db;

export async function connectToDB() {
  if (db) return db;
  await client.connect();
  db = client.db(process.env.MONGO_DB);
  return db;
}
