import {
  Column,
  Entity,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity()
export class Account {
  @ObjectIdColumn()
  id: string;

  @Column()
  @Unique('UQ_User_username', ['username'])
  username: string;

  @Column()
  passwordHash: string;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn()
  creationAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
