require('dotenv').config();

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['src/db/**/*.entity{.js,.ts}'],
  migrations: ['src/db/migrations/**/*{.js,.ts}'],
  subscribers: ['src/db/subscribers/**/*{.js,.ts}'],
  synchronize: false,
  cli: {
    entitiesDir: 'src/db',
    migrationsDir: 'src/db/migrations',
    subscribersDir: 'src/db/subscribers',
  },
};
