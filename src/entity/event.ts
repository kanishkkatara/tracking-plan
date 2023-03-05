import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: "event" })
export class Event extends BaseEntity {
  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  rules: string;
}
