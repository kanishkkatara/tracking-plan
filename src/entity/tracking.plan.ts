import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: "tracking_plan" })
export class TrackingPlan extends BaseEntity {
  @Column({ type: "varchar" })
  name: string;
}
