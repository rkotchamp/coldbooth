import dotenv from "dotenv";
import { connectToDB } from "./app/lib/mongodb.js";

dotenv.config();

(async () => {
  try {
    const db = await connectToDB();
    console.log(db);
  } catch (error) {
    console.error(error);
  }
})();
