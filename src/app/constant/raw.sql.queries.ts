/**
  Query to get all tracking plans with their associated events.
*/
const getAllTrackingPlansQuery = `
  SELECT tp.name AS tracking_plan_name, 
  tp.description AS tracking_plan_description, 
  e.name AS event_name, 
  e.description AS event_description, 
  e.rules AS event_rules
  FROM tracking_plan tp 
  LEFT JOIN tracking_plan_event_mapping tpm ON tp.id = tpm.tracking_plan_id 
  LEFT JOIN event e ON tpm.event_id = e.id;
`;

/**
  Query to create a new tracking plan.
*/
const createTrackingPlanQuery = `INSERT INTO tracking_plan (name, description) VALUES ($1, $2) RETURNING *`;

/**
  Query to create a new event.
*/
const createEventQuery = `INSERT INTO event (name, description, rules) VALUES ($1, $2, $3) RETURNING *`;

/**
  Query to create a new mapping between a tracking plan and an event.
*/
const createTrackingPlanEventMappingQuery = `INSERT INTO tracking_plan_event_mapping (tracking_plan_id, event_id) VALUES ($1, $2) RETURNING *`;

export default {
  getAllTrackingPlansQuery,
  createTrackingPlanQuery,
  createEventQuery,
  createTrackingPlanEventMappingQuery,
};