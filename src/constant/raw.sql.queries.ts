const getAllTrackingPlansQuery = `SELECT * from tracking_plan`;

const createTrackingPlanQuery = `INSERT INTO tracking_plan (name) VALUES ($1) RETURNING *`;

const createEventQuery = `INSERT INTO event (tracking_plan_id, name, description, rules) VALUES ($1, $2, $3, $4) RETURNING *`;

export default {
  getAllTrackingPlansQuery,
  createTrackingPlanQuery,
  createEventQuery,
};
