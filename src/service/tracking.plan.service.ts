import { TrackingPlan } from "../entity/tracking.plan";
import { TrackingPlanModel } from "../model/tracking.plan.model";
import trackingPlanRepository from "../repository/tracking.plan.repository";
import eventService from "./event.service";
import trackingPlanEventMappingService from "./tracking.plan.event.mapping.service";
import logger from "../config/logger";

/**
  Retrieves all tracking plans and their events from the database
  @returns {Promise<TrackingPlan[]>} - An array of tracking plans with their associated events
*/
const getAllTrackingPlans = async () => {
  logger.info("Fetching all tracking plans...");
  const rawData = await trackingPlanRepository.getAllTrackingPlans();
  logger.info(`Retrieved ${rawData.length} tracking plan(s) from the database`);
  logger.debug(`rawData: ${JSON.stringify(rawData)}`);
  const trackingPlanData = rawData.reduce(
    (
      acc,
      {
        tracking_plan_name,
        tracking_plan_description,
        event_name,
        event_description,
        event_rules,
      }
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
          description: tracking_plan_description,
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
  logger.debug(`trackingPlanData: ${JSON.stringify(trackingPlanData)}`);
  return trackingPlanData;
};

/**
  Creates a new tracking plan and associated events in the database
  @param {TrackingPlanModel} trackingPlanData - The data for the new tracking plan and its events
  @returns {Promise<TrackingPlan>} - The created tracking plan object
*/
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
