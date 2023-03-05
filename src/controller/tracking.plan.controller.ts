import trackingPlanService from "../service/tracking.plan.service";
import { Request, Response } from "express";
import { TrackingPlanModel } from "../model/tracking.plan.model";
import trackingPlanValidator from "../service/tracking.plan.validator";

const getAllTrackingPlans = async (req: Request, res: Response) => {
  try {
    const trackingPlan = await trackingPlanService.getAllTrackingPlans();
    res.status(200).json(trackingPlan);
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).send(error.message);
  }
};

const createTrackingPlan = async (req: Request, res: Response) => {
  const trackingPlanModel: TrackingPlanModel = req.body;
  try {
    await trackingPlanValidator.validateTrackingPlanData(trackingPlanModel);
    const trackingPlan = await trackingPlanService.createTrackingPlan(
      trackingPlanModel
    );
    res.status(201).json(trackingPlan);
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).send(error.message);
  }
};

export default {
  getAllTrackingPlans,
  createTrackingPlan,
};
