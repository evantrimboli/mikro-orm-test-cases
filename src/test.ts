import { MikroORM } from '@mikro-orm/core';
import config from './mikro-orm.config';

const setup = async () => {
  const { em } = await MikroORM.init(config);
  return em;
};

const go = () => {
  return Promise.resolve();
};

go().then(() => {
  process.exit(0);
});
