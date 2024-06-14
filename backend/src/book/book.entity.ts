// book.entity.ts

import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Book {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  available: boolean;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  issuedTo : string
}
