import trackingPlanService from "../service/tracking.plan.service";
import { Request, Response } from "express";
import { TrackingPlanModel } from "../model/tracking.plan.model";

const getAllTrackingPlans = async (req: Request, res: Response) => {
  try {
    const trackingPlan = await trackingPlanService.getAllTrackingPlans();
    res.status(200).json(trackingPlan);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const createTrackingPlan = async (req: Request, res: Response) => {
  try {
    const trackingPlanModel: TrackingPlanModel = req.body;
    const trackingPlan = await trackingPlanService.createTrackingPlan(
      trackingPlanModel
    );
    res.status(201).json(trackingPlan);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

export default {
  getAllTrackingPlans,
  createTrackingPlan,
};
