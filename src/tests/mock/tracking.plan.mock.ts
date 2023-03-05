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

const allTrackingPlansAndEventsRaw = [
  {
    tracking_plan_name: "TP 1",
    tracking_plan_description: "Sample tracking plan",
    event_name: "Event 1",
    event_description: "",
    event_rules: "{}",
  },
  {
    tracking_plan_name: "TP 2",
    tracking_plan_description: "Sample",
    event_name: "event 1",
    event_description: "",
    event_rules: "{}",
  },
  {
    tracking_plan_name: "TP 3",
    tracking_plan_description: "test",
    event_name: "E3",
    event_description: "test",
    event_rules: "{}",
  },
  {
    tracking_plan_name: "TP 3",
    tracking_plan_description: "test",
    event_name: "E4",
    event_description: "test",
    event_rules: "{}",
  },
];

const allTrackingPlansAndEvents = [
  {
    tracking_plan_name: "TP 1",
    description: "Sample tracking plan",
    event: [
      {
        name: "Event 1",
        description: "",
        rules: "{}",
      },
    ],
  },
  {
    tracking_plan_name: "TP 2",
    description: "Sample",
    event: [
      {
        name: "event 1",
        description: "",
        rules: "{}",
      },
    ],
  },
  {
    tracking_plan_name: "TP 3",
    description: "test",
    event: [
      {
        name: "E3",
        description: "test",
        rules: "{}",
      },
      {
        name: "E4",
        description: "test",
        rules: "{}",
      },
    ],
  },
];

export default {
  trackingPlanModel,
  trackingPlanResult,
  allTrackingPlansAndEventsRaw,
  allTrackingPlansAndEvents,
};
