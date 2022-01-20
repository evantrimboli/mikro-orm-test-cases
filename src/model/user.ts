import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property({ columnType: 'timestamptz', defaultRaw: 'now()' })
  created!: Date;
}
