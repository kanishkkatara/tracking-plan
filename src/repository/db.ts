import { Pool } from "pg";

const connectionConfig = {
  user: "postgres",
  host: "localhost",
  database: "tracking_plan",
  password: "password",
  port: 5432,
};

const pool = new Pool(connectionConfig);

export default pool;
