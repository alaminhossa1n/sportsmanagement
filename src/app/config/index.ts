import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_ACCESS_SECRET,
  salt_rounds: process.env.saltRounds,
  NODE_ENV: process.env.NODE_ENV,
};
