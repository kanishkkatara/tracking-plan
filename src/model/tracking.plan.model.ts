export interface TrackingPlanModel {
  name: string;
  events: EventModel[];
}

export interface EventModel {
  name: string;
  description: string;
  rules: String; // change this to json
}
