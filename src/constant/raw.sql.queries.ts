const getAllTrackingPlansQuery = `
  SELECT tp.name AS tracking_plan_name, 
  tp.description AS tracking_plan_description, 
  e.name AS event_name, 
  e.description AS event_description, 
  e.rules AS event_rules
  FROM tracking_plan tp 
  JOIN tracking_plan_event_mapping tpm ON tp.id = tpm.tracking_plan_id 
  JOIN event e ON tpm.event_id = e.id;
`;

const createTrackingPlanQuery = `INSERT INTO tracking_plan (name, description) VALUES ($1, $2) RETURNING *`;

const createEventQuery = `INSERT INTO event (name, description, rules) VALUES ($1, $2, $3) RETURNING *`;

const createTrackingPlanEventMappingQuery = `INSERT INTO tracking_plan_event_mapping (tracking_plan_id, event_id) VALUES ($1, $2) RETURNING *`;

export default {
  getAllTrackingPlansQuery,
  createTrackingPlanQuery,
  createEventQuery,
  createTrackingPlanEventMappingQuery,
};
