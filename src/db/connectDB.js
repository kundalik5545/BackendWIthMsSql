import sql from "mssql";
import { connectionToDB } from "../../src/scripts/connectionToDB.scripts.js";

async function connectDB() {
  try {
    await sql.connect(
      "Server=localhost\\SQLEXPRESS;Database=Backend;User Id=testuser;Password=password;TrustServerCertificate=True;"
    );
    const result = await sql.query(connectionToDB);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
