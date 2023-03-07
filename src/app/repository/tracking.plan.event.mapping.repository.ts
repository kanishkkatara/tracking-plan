import rawSqlQueries from "../constant/raw.sql.queries";

const createTrackingPlanEventMapping = async (
  client: any,
  trackingPlanId: number,
  eventId: number
) => {
  return (
    await client.query(rawSqlQueries.createTrackingPlanEventMappingQuery, [
      trackingPlanId,
      eventId,
    ])
  ).rows;
};

export default {
  createTrackingPlanEventMapping,
};
