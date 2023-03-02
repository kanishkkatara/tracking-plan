import rawSqlQueries from "../constant/raw.sql.queries";
import { TrackingPlanModel, EventModel } from "../model/tracking.plan.model";
import pool from "./db";

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
      ])
    ).rows[0];
  } finally {
    client.release();
  }
};

const createEvent = async (trackingPlanId: number, event: EventModel) => {
  const client = await pool.connect();
  try {
    return (
      await client.query(rawSqlQueries.createEventQuery, [
        trackingPlanId,
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
  getAllTrackingPlans,
  createTrackingPlan,
  createEvent,
};
