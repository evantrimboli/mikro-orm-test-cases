import {
  Collection,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property
} from '@mikro-orm/core';
import DefaultProductImage from './default-product-image';
import ProductImage from './product-image';

@Entity()
export default class Product {
  @PrimaryKey()
  id!: number;

  @Property()
  label!: string;

  @OneToOne()
  defaultImage?: DefaultProductImage;

  @OneToMany(() => ProductImage, ({ product }) => product)
  images = new Collection<ProductImage>(this);
}
