import { Router } from "express";
import trackingPlanController from "../controller/tracking.plan.controller";

const router = Router();

router.get("/", trackingPlanController.getAllTrackingPlans);

router.post("/", trackingPlanController.createTrackingPlan);

export default router;
