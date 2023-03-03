import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import trackingPlanRoute from "./routes/tracking.plan.route";
import "reflect-metadata";
import pool from "./config/db.config";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/tracking-plan", trackingPlanRoute);

app.get("/health", (req, res) => {
  console.log(req.body);
  res.status(200).send("I am alive");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

async function main() {
  const client = await pool.connect();

  try {
    const result = await client.query("SELECT 1");
    console.log("Database running");
  } finally {
    client.release();
  }
}

main().catch(console.error);
