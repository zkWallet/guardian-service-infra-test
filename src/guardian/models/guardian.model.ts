import {
  Column,
  Entity,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity()
export class Guardian {
  @ObjectIdColumn()
  id: string;

  @Column()
  @Unique('UQ_Guardian_registrationNumber', ['registrationNumber'])
  registrationNumber: string;

  @Column()
  displayName: string;

  @Column()
  description: string;

  @Column()
  @Unique('UQ_Guardian_wallet', ['wallet'])
  wallet: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  country: string;

  @Column()
  @Unique('UQ_Guardian_email', ['email'])
  email: string;

  @Column({ type: 'number' })
  @Unique('UQ_Guardian_phonenumber', ['phonenumber'])
  phonenumber: string;

  @Column()
  @Unique('UQ_Guardian_website', ['website'])
  website: string;

  @Column({ type: 'bigint' })
  @Unique('UQ_Guardian_identityCommitment', ['identityCommitment'])
  identityCommitment: string;

  @Column({ type: 'boolean', default: false })
  public isApproved: boolean;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn()
  creationAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
