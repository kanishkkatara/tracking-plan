import { TrackingPlan } from "../entity/tracking.plan";
import { TrackingPlanModel } from "../model/tracking.plan.model";
import trackingPlanRepository from "../repository/tracking.plan.repository";

const getAllTrackingPlans = async () => {
  return await trackingPlanRepository.getAllTrackingPlans();
};

const createTrackingPlan = async (trackingPlanData: TrackingPlanModel) => {
  const trackingPlan: TrackingPlan =
    await trackingPlanRepository.createTrackingPlan(trackingPlanData);
  for (const event of trackingPlanData.events) {
    await trackingPlanRepository.createEvent(trackingPlan.id, event);
  }
  return trackingPlan;
};

export default {
  getAllTrackingPlans,
  createTrackingPlan,
};
