import rawSqlQueries from "../constant/raw.sql.queries";
import pool from "../config/db.config";

const createTrackingPlanEventMapping = async (
  trackingPlanId: number,
  eventId: number
) => {
  const client = await pool.connect();
  try {
    return (
      await client.query(rawSqlQueries.createTrackingPlanEventMappingQuery, [
        trackingPlanId,
        eventId,
      ])
    ).rows;
  } finally {
    client.release();
  }
};

export default {
  createTrackingPlanEventMapping,
};
