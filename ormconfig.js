require('dotenv').config();

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/**/*{.ts,.js}'],
  subscribers: ['dist/db/subscribers/**/*{.ts,.js}'],
  synchronize: true,
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/db/migrations',
    subscribersDir: 'src/db/subscribers',
  },
};
