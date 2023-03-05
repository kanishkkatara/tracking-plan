import rawSqlQueries from "../constant/raw.sql.queries";
import { EventModel } from "../model/event.model";
import pool from "../config/db.config";

const createEvent = async (event: EventModel) => {
  const client = await pool.connect();
  try {
    return (
      await client.query(rawSqlQueries.createEventQuery, [
        event.name,
        event.description,
        event.rules,
      ])
    ).rows;
  } finally {
    client.release();
  }
};

export default {
  createEvent,
};
