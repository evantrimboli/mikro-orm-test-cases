import { Entity, OneToOne, PrimaryKeyType } from '@mikro-orm/core';
import Product from './product';
import ProductImage from './product-image';

@Entity()
export default class DefaultProductImage {
  constructor(product: Product, image: ProductImage) {
    this.product = product;
    this.image = image;
  }

  @OneToOne({
    primary: true,
    owner: true,
    onDelete: 'cascade'
  })
  product!: Product;

  @OneToOne({
    primary: true,
    owner: true,
    onDelete: 'cascade'
  })
  image!: ProductImage;

  [PrimaryKeyType]: [Product['id'], ProductImage['id']];
}
