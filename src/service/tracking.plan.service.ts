import { TrackingPlan } from "../entity/tracking.plan";
import { TrackingPlanModel } from "../model/tracking.plan.model";
import trackingPlanRepository from "../repository/tracking.plan.repository";
import eventService from "./event.service";
import trackingPlanEventMappingService from "./tracking.plan.event.mapping.service";

const getAllTrackingPlans = async () => {
  return await trackingPlanRepository.getAllTrackingPlans();
};

const createTrackingPlan = async (trackingPlanData: TrackingPlanModel) => {
  const trackingPlan: TrackingPlan =
    await trackingPlanRepository.createTrackingPlan(trackingPlanData);
  for (const eventData of trackingPlanData.events) {
    const event = await eventService.createEvent(eventData);
    await trackingPlanEventMappingService.createTrackingPlanEventMapping(
      trackingPlan.id,
      event.id
    );
  }
  return trackingPlan;
};

export default {
  getAllTrackingPlans,
  createTrackingPlan,
};
