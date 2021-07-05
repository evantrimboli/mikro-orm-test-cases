import { Options, UnderscoreNamingStrategy } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config: Options = {
  entities: ['./dist/src/model'],
  entitiesTs: ['./src/model'],
  type: 'postgresql',
  metadataProvider: TsMorphMetadataProvider,
  namingStrategy: UnderscoreNamingStrategy,
  logger: msg => {
    console.log(msg);
  },
  debug: true,
  host: 'localhost',
  port: 5432,
  dbName: 'test',
  user: 'postgres',
  password: 'abc123'
};

export default config;
