import dotenv from "dotenv";
import connectDB from "../Project 01 mssql/src/db/connectDB.js";
dotenv.config({ path: "./.env" });

connectDB();
