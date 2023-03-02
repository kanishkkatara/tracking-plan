import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "event" })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  tracking_plan_id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  rules: string;
}
