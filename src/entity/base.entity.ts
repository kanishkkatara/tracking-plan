import { PrimaryGeneratedColumn } from "typeorm";


export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  isDeleted: boolean;

  constructor() {
    this.isDeleted = false;
  }
}
