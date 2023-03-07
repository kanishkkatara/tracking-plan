import trackingPlanEventMappingRepository from "../repository/tracking.plan.event.mapping.repository";

const createTrackingPlanEventMapping = async (
  client: any,
  trackingPlanId: number,
  eventId: number
) => {
  await trackingPlanEventMappingRepository.createTrackingPlanEventMapping(
    client,
    trackingPlanId,
    eventId
  );
};

export default {
  createTrackingPlanEventMapping,
};
