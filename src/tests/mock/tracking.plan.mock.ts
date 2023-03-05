const trackingPlanModel = {
  name: "TP1",
  description: "Sample tracking plan",
  events: [
    {
      name: "Event1",
      description: "Sample event 1",
      rules: "{}",
    },
    {
      name: "Event2",
      description: "Sample event 2",
      rules: "{}",
    },
  ],
};

const trackingPlanResult = {
  id: 11,
  name: "TP1",
  description: "Sample tracking plan",
  is_deleted: false,
};

export default {
    trackingPlanModel,
    trackingPlanResult
}