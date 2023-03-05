import rawSqlQueries from "../constant/raw.sql.queries";
import { TrackingPlanModel } from "../model/tracking.plan.model";
import pool from "../config/db.config";

const getAllTrackingPlans = async () => {
  const client = await pool.connect();
  try {
    return (await client.query(rawSqlQueries.getAllTrackingPlansQuery)).rows;
  } finally {
    client.release();
  }
};

const createTrackingPlan = async (trackingPlanData: TrackingPlanModel) => {
  const client = await pool.connect();
  try {
    return (
      await client.query(rawSqlQueries.createTrackingPlanQuery, [
        trackingPlanData.name,
        trackingPlanData.description,
      ])
    ).rows[0];
  } finally {
    client.release();
  }
};

export default {
  getAllTrackingPlans,
  createTrackingPlan,
};
