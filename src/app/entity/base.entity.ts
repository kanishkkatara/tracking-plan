import { PrimaryGeneratedColumn } from "typeorm";


export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  is_deleted: boolean;

  constructor() {
    this.is_deleted = false;
  }
}
