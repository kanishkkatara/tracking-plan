import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tracking_plan" })
export class TrackingPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;
}
