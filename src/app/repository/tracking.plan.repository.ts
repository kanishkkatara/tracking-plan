import rawSqlQueries from "../constant/raw.sql.queries";
import { TrackingPlanModel } from "../model/tracking.plan.model";

const getAllTrackingPlans = async (client: any) => {
  return (await client.query(rawSqlQueries.getAllTrackingPlansQuery)).rows;
};

const createTrackingPlan = async (
  client: any,
  trackingPlanData: TrackingPlanModel
) => {
  return (
    await client.query(rawSqlQueries.createTrackingPlanQuery, [
      trackingPlanData.name,
      trackingPlanData.description,
    ])
  ).rows[0];
};

export default {
  getAllTrackingPlans,
  createTrackingPlan,
};
