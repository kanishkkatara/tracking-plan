import BadRequestError from "../error/bad.request.error";
import { TrackingPlanModel } from "../model/tracking.plan.model";

const Joi = require("joi");

const eventSchema = Joi.object({
  name: Joi.string().required().min(1),
  description: Joi.string(),
  rules: Joi.string().required(),
});

const trackingPlanSchema = Joi.object({
  name: Joi.string().required().min(1),
  description: Joi.string(),
  events: Joi.array().items(eventSchema).min(1),
});

const validateTrackingPlanData = async (
  trackingPlanData: TrackingPlanModel
) => {
  const { error } = trackingPlanSchema.validate(trackingPlanData);
  if (error) {
    throw new BadRequestError(`Invalid tracking plan data: ${error.message}`);
  }
};

export default {
  trackingPlanSchema,
  validateTrackingPlanData,
};
