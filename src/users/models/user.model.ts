import { Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn()
  creationAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
