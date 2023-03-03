import trackingPlanEventMappingRepository from "../repository/tracking.plan.event.mapping.repository";

const createTrackingPlanEventMapping = async (
  trackingPlanId: number,
  eventId: number
) => {
  await trackingPlanEventMappingRepository.createTrackingPlanEventMapping(
    trackingPlanId,
    eventId
  );
};

export default {
  createTrackingPlanEventMapping,
};
