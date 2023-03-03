const getAllTrackingPlansQuery = `SELECT * from tracking_plan`;

const createTrackingPlanQuery = `INSERT INTO tracking_plan (name) VALUES ($1) RETURNING *`;

const createEventQuery = `INSERT INTO event (name, description, rules) VALUES ($1, $2, $3) RETURNING *`;

const createTrackingPlanEventMappingQuery = `INSERT INTO tracking_plan_event_mapping (tracking_plan_id, event_id) VALUES ($1, $2) RETURNING *`;

export default {
  getAllTrackingPlansQuery,
  createTrackingPlanQuery,
  createEventQuery,
  createTrackingPlanEventMappingQuery,
};
