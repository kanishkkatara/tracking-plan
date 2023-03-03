import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tracking_plan_event_mapping" })
export class TrackingPlanEventMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  tracking_plan_id: number;

  @Column({ type: "int" })
  event_id: number;
}
