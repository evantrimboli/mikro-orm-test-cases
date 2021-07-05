import { MikroORM } from '@mikro-orm/core';
import config from './mikro-orm.config';
import DefaultProductImage from './model/default-product-image';
import Product from './model/product';
import ProductImage from './model/product-image';

const setup = async () => {
  const { em } = await MikroORM.init(config);
  return em;
};

const insert = async () => {
  const em = await setup();

  const p = new Product();
  p.label = 'Product';

  const image1 = new ProductImage();
  image1.url = 'foo.png';
  image1.width = image1.height = 1;
  p.images.add(image1);

  const image2 = new ProductImage();
  image2.url = 'bar.png';
  image2.width = image2.height = 2;
  p.images.add(image2);

  em.persist(p);
  em.persist(new DefaultProductImage(p, image1));

  await em.flush();
};

const go = async () => {
  await insert();
  const em = await setup();

  const ret = await em.getRepository(Product).findAll({
    populate: {
      defaultImage: true,
      images: true
    }
  });
  console.log('No attempt to join defaultImage');
};

go().then(() => {
  process.exit(0);
});
