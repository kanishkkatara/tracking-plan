import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: "tracking_plan_event_mapping" })
export class TrackingPlanEventMapping extends BaseEntity {
  @Column({ type: "int" })
  tracking_plan_id: number;

  @Column({ type: "int" })
  event_id: number;
}
