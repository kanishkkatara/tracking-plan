import { TrackingPlan } from "../entity/tracking.plan";
import { TrackingPlanModel } from "../model/tracking.plan.model";
import trackingPlanRepository from "../repository/tracking.plan.repository";
import eventService from "./event.service";
import trackingPlanEventMappingService from "./tracking.plan.event.mapping.service";

const getAllTrackingPlans = async () => {
  const rawData = await trackingPlanRepository.getAllTrackingPlans();
  const trakingPlanData = rawData.reduce(
    (
      acc,
      { tracking_plan_name, event_name, event_description, event_rules }
    ) => {
      const existingTrackingPlan = acc.find(
        (tp) => tp.tracking_plan_name === tracking_plan_name
      );
      if (existingTrackingPlan) {
        existingTrackingPlan.event.push({
          name: event_name,
          description: event_description,
          rules: event_rules,
        });
      } else {
        acc.push({
          tracking_plan_name,
          event: [
            {
              name: event_name,
              description: event_description,
              rules: event_rules,
            },
          ],
        });
      }
      return acc;
    },
    []
  );

  console.log(trakingPlanData);
  return trakingPlanData;
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
