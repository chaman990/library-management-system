// user.entity.ts

import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  isAdmin: boolean;
  // Add other user properties here

  @Column()
  password: string;
}
