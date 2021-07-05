import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import Product from './product';

@Entity()
export default class ProductImage {
  @PrimaryKey()
  id!: number;

  @ManyToOne()
  product!: Product;

  @Property()
  url!: string;

  @Property()
  width!: number;

  @Property()
  height!: number;
}
